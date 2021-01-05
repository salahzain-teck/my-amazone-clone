import firebase  from "firebase"
const firebaseConfig = {
  apiKey: "AIzaSyAFR8aVI2ms_-9dzhjAWZKaekEJaaFn6UA",
  authDomain: "e-clone-96aaa.firebaseapp.com",
  databaseURL: "https://e-clone-96aaa-default-rtdb.firebaseio.com",
  projectId: "e-clone-96aaa",
  storageBucket: "e-clone-96aaa.appspot.com",
  messagingSenderId: "948064765555",
  appId: "1:948064765555:web:e1c3f6ccf7be7e17a3cc06",
  measurementId: "G-5411CB19SX"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db,  auth};


