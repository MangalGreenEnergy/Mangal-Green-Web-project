import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'; 

const app = firebase.initializeApp({
  apiKey: "AIzaSyD6rhHbZI5VIB46DejlL_IOslFWcY4HgXg",
  authDomain: "e-voting-d0773.firebaseapp.com",
  projectId: "e-voting-d0773",
  storageBucket: "e-voting-d0773.appspot.com",
  messagingSenderId: "693037152361",
  appId: "1:693037152361:web:33d7475a6fa71bf5f84af8",
  measurementId: "G-2HF0RWEM7P"
})
export const auth = app.auth();
export default app;