import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
  arrayUnion,
  arrayRemove,
} from 'firebase/firestore';
import { db } from '../firebase';
import { IProduct } from '@/types';

const getUserCartRef = (userId: string) => doc(db, 'carts', userId);

export const addItemToCart = async (userId: string, product: IProduct) => {
  try {
    const userCartRef = getUserCartRef(userId);
    const userCartSnap = await getDoc(userCartRef);

    if (!userCartSnap.exists()) {
      await setDoc(userCartRef, { items: [product] });
    } else {
      await updateDoc(userCartRef, { items: arrayUnion(product) });
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
