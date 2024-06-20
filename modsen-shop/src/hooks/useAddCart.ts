import { getFirestore, addDoc, collection } from 'firebase/firestore';

import { useAppSelector } from './redux';

export const useAddCart = () => {
  const db = getFirestore();

  const userId = useAppSelector((state) => state.userReducer.user.id);

  const addCart = async (productId: number, amount: number) => {
    const newDoc = await addDoc(collection(db, 'cart'), {
      productId,
      amount,
      userId,
    });
    return newDoc.id;
  };

  return { addCart };
};
