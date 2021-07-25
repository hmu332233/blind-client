import { useEffect, useState } from 'react';
import { db } from '../utils/firebase';

type UseFirestoreProps = {
  key: string,
};
const useFirestore = <T>({ key = 'posts' }: UseFirestoreProps) => {
  const [items, setItems] = useState<Array<T>>([]);
  const add = (data: T) => {
    db.collection(key)
      .add({
        id: `${key}_${Date.now()}`,
        ...data,
      })
      .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  };

  useEffect(() => {
    db.collection(key).orderBy('id')
      .onSnapshot((querySnapshot) => {
        const newItems: Array<T> = [];
        querySnapshot.forEach((doc) => {
          newItems.push(doc.data() as T);
        });
        setItems(newItems);
    });
  }, []);

  return {
    items,
    add,
  };
};

export default useFirestore;