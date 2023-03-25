import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCtwzEFUM8B5rgNW7kxos8uxHKSKE-Fovs",
  authDomain: "mernapp-de109.firebaseapp.com",
  databaseURL: "https://mernapp-de109-default-rtdb.firebaseio.com",
  projectId: "mernapp-de109",
  storageBucket: "mernapp-de109.appspot.com",
  messagingSenderId: "538144104773",
  appId: "1:538144104773:web:030a3a9bac90ba8d5e9e2c",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
