import firebase from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyBmdFfeA0-IZsZaScnY1q_tQ0QaYnTwqaM",
  authDomain: "welife-ae9cf.firebaseapp.com",
  projectId: "welife-ae9cf",
  storageBucket: "welife-ae9cf.appspot.com",
  messagingSenderId: "1002935162506",
  appId: "1:1002935162506:web:1f545d9edbb86c1179bf73"
};


firebase.initializeApp(firebaseConfig);

export default firebase;