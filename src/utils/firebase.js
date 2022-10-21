// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3pkmV4N4JPW55IKaAM8cwLUTFXUy_LTk",
  authDomain: "maxserv-treinapp.firebaseapp.com",
  projectId: "maxserv-treinapp",
  storageBucket: "maxserv-treinapp.appspot.com",
  messagingSenderId: "79945979924",
  appId: "1:79945979924:web:2acf09bdef96599de12f01"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
       .then((result) => {
       })
       .catch((error) => {
       })
 };