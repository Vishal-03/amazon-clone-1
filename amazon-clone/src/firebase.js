// import firebase from 'firebase';
// import 'firebase/auth';
// import 'firebase/firestore';


// const firebaseConfig = {
//     apiKey: "AIzaSyBoEC0dqqESHS_yzzZ3h2YjUJNwof_xyRY",
//     authDomain: "clone-62eec.firebaseapp.com",
//     projectId: "clone-62eec",
//     storageBucket: "clone-62eec.appspot.com",
//     messagingSenderId: "818968634151",
//     appId: "1:818968634151:web:c90cf070cd81a86d1dff02",
//     measurementId: "G-2CZWLL2HNL"
//   };

//   const firebaseApp = firebase.initializeapp(firebaseConfig);

//   const db = firebaseApp.firestore();
//   const auth = firebase.auth();

//   export { db, auth };
// Import the functions you need from the SDKs you need


// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyD5fft0J6SWhbSizax3Pk4cTRmZkEpq518",
//   authDomain: "clone-f246b.firebaseapp.com",
//   projectId: "clone-f246b",
//   storageBucket: "clone-f246b.appspot.com",
//   messagingSenderId: "598765731317",
//   appId: "1:598765731317:web:2e0c148d48dc860441f4bc",
//   measurementId: "G-1YWZZB8THJ"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);




// import firebase from "firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyD5fft0J6SWhbSizax3Pk4cTRmZkEpq518",
  authDomain: "clone-f246b.firebaseapp.com",
  projectId: "clone-f246b",
  storageBucket: "clone-f246b.appspot.com",
  messagingSenderId: "598765731317",
  appId: "1:598765731317:web:2e0c148d48dc860441f4bc",
  measurementId: "G-1YWZZB8THJ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };