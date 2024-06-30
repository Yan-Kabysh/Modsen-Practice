import { onAuthStateChanged, signOut } from 'firebase/auth';
import { arrayUnion, doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { useDispatch } from 'react-redux';

import { IProduct } from '@/../types/types';
import { ROUTES } from '@/constants/Path';
import { auth, db } from '@/firebase';
import {
  addItem,
  removeItem,
  setCart,
  updateQuantity,
} from '@/store/reducers/CartReducer/CartReducer';
import {
  removeUser,
  userFetchingSuccess,
} from '@/store/reducers/UserReducer/UserSlice';

const getUserCartRef = (userId: string) => doc(db, 'carts', userId);

export const addItemToCart = async (userId: string, product: IProduct) => {
  try {
    const userCartRef = getUserCartRef(userId);
    const userCartSnap = await getDoc(userCartRef);

    if (!userCartSnap.exists()) {
      await setDoc(userCartRef, { items: [product] });
    } else {
      const items = userCartSnap.data().items || [];
      const existingProductIndex = items.findIndex(
        (item: IProduct) => item.id === product.id
      );
      if (existingProductIndex > -1) {
        items[existingProductIndex].quantity += product.quantity;
        await updateDoc(userCartRef, { items });
      } else {
        await updateDoc(userCartRef, { items: arrayUnion(product) });
      }
    }
  } catch (error) {
    console.error('Error adding item to cart:', error);
    throw error;
  }
};

export const removeItemFromCart = async (userId: string, productId: number) => {
  try {
    console.log(`Removing product ${productId} from user ${userId}'s cart...`);
    const userCartRef = getUserCartRef(userId);
    const userCartSnap = await getDoc(userCartRef);

    if (userCartSnap.exists()) {
      const items = userCartSnap.data()?.items || [];
      const updatedItems = items.filter(
        (item: IProduct) => item.id !== productId
      );

      await updateDoc(userCartRef, { items: updatedItems });
      console.log(
        `Product ${productId} removed successfully from user ${userId}'s cart.`
      );
    } else {
      console.log(`Cart for user ${userId} does not exist.`);
    }
  } catch (error) {
    console.error('Error removing item from cart:', error);
    throw error;
  }
};

export const updateItemQuantity = async (
  userId: string,
  productId: number,
  quantity: number
) => {
  try {
    const userCartRef = getUserCartRef(userId);
    const userCartSnap = await getDoc(userCartRef);

    if (userCartSnap.exists()) {
      const items = userCartSnap.data()?.items || [];
      const updatedItems = items.map((item: IProduct) =>
        item.id === productId ? { ...item, quantity } : item
      );

      await updateDoc(userCartRef, { items: updatedItems });
      console.log(
        `Product ${productId} quantity updated successfully in user ${userId}'s cart.`
      );
    } else {
      console.log(`Cart for user ${userId} does not exist.`);
    }
  } catch (error) {
    console.error('Error updating item quantity in cart:', error);
    throw error;
  }
};

export const getUserCart = async (userId: string) => {
  try {
    const userCartRef = getUserCartRef(userId);
    const userCartSnap = await getDoc(userCartRef);

    if (userCartSnap.exists()) {
      return userCartSnap.data()?.items || [];
    } else {
      return [];
    }
  } catch (error) {
    console.error('Error getting user cart:', error);
    throw error;
  }
};

export const useQuantityChangeHandler = (
  userId: any,
  productId: number,
  setQuantity: (arg0: any) => void,
  onQuantityChange: (arg0: any) => void
) => {
  const dispatch = useDispatch();

  const handleQuantityChange = async (newQuantity: number) => {
    setQuantity(newQuantity);
    onQuantityChange(newQuantity);

    if (userId) {
      try {
        await updateItemQuantity(userId, productId, newQuantity);
        dispatch(updateQuantity({ id: productId, quantity: newQuantity }));
      } catch (error) {
        console.error('Failed to update quantity:', error);
      }
    } else {
      console.error('User ID is null. Cannot update quantity.');
    }
  };

  return handleQuantityChange;
};

export const handleAuthStateChange = async ({
  auth,
  dispatch,
  navigate,
  setLoading,
}: any) => {
  const token = localStorage.getItem('token');
  if (!token) {
    navigate(ROUTES.LOGIN);
    setLoading(false);
    return;
  }

  onAuthStateChanged(auth, async (currentUser) => {
    if (currentUser) {
      console.log('currentUser', currentUser);
      const userId = currentUser.uid;
      dispatch(
        userFetchingSuccess({ id: userId, email: currentUser.email, token })
      );
      try {
        const items = await getUserCart(userId);
        const itemsWithQuantity = items.map((item: { quantity: any }) => ({
          ...item,
          quantity: item.quantity || 1,
        }));
        dispatch(setCart(itemsWithQuantity));
        setLoading(false);
      } catch (error) {
        console.error('Failed to load cart items:', error);
        setLoading(false);
      }
    } else {
      navigate(ROUTES.LOGIN);
      setLoading(false);
    }
  });
};

export const handleRemoveItem = async ({
  user,
  dispatch,
  id,
  setRemovingItems,
  removeItemFromCart,
}: any) => {
  if (user && user.id) {
    try {
      setRemovingItems((prev: any) => ({ ...prev, [id]: true }));
      await removeItemFromCart(user.id, id);
      dispatch(removeItem(id));
      setRemovingItems((prev: any) => ({ ...prev, [id]: false }));
    } catch (error) {
      console.error('Failed to remove product from cart:', error);
      alert('Failed to remove product from cart. Please try again later.');
    }
  } else {
    alert('Please log in to add items to your cart');
  }
};

export const handleQuantityChange = async ({
  user,
  dispatch,
  updateItemQuantity,
  productId,
  newQuantity,
}: any) => {
  if (user && user.id) {
    try {
      await updateItemQuantity(user.id, productId, newQuantity);
      dispatch(updateQuantity({ id: productId, quantity: newQuantity }));
    } catch (error) {
      console.error('Failed to update product quantity in cart:', error);
    }
  }
};

export const handleLogOut = async ({ dispatch }: any) => {
  try {
    await signOut(auth);
    localStorage.removeItem('token');
    dispatch(setCart([]));
    dispatch(removeUser());
    console.log('User logged out');
  } catch (error) {
    console.error('Error logging out user:', error);
  }
};

export const handleAddToCart = async (user: any, product: IProduct, setAdd: any, dispatch: any, navigate: any) => {
  if (localStorage.getItem('token')) {
    if (user && user.id) {
      try {
        setAdd(true);
        await addItemToCart(user.id, product);
        dispatch(addItem(product)); // Update Redux state
        setAdd(false);
        // alert('Product added to cart');
      } catch (error) {
        alert('Failed to add product to cart. Please try again later.');
      }
    } else {
      alert('Please log in to add items to your cart');
    }
  } else {
    navigate(ROUTES.LOGIN);
  }
};

export const handleItemsLoad = (auth: any, dispatch: any, navigate: any) => {
  const token = localStorage.getItem('token');
  if (token) {
    onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        const userId = currentUser.uid;
        dispatch(
          userFetchingSuccess({ id: userId, email: currentUser.email, token })
        );
        try {
          const items = await getUserCart(userId);
          const itemsWithQuantity = items.map((item: IProduct) => ({
            ...item,
            quantity: item.quantity || 1,
          }));
          dispatch(setCart(itemsWithQuantity));
        } catch (error) {
          console.error('Failed to load cart items:', error);
        }
      } else {
        navigate(ROUTES.LOGIN);
      }
    });
  }
};