import firebase from 'firebase/app';
import 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5q4SZp3O5VWZUmS33SJSrRkw3_1V1DeY",
  authDomain: "proyecto-final-react-ee0f3.firebaseapp.com",
  projectId: "proyecto-final-react-ee0f3",
  storageBucket: "proyecto-final-react-ee0f3.appspot.com",
  messagingSenderId: "770698372750",
  appId: "1:770698372750:web:117f355a011a3ec68b4bdf"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export const getFirestore = () => {
    return firebase.firestore(app);
} 