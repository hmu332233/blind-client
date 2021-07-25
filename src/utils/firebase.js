import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export default firebase;