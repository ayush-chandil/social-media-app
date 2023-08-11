import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth} from "firebase/auth";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAYdo2mTHuyPh_duZyXA3woaL870Vs6r9A",
  authDomain: "social-media-app-d2e57.firebaseapp.com",
  projectId: "social-media-app-d2e57",
  storageBucket: "social-media-app-d2e57.appspot.com",
  messagingSenderId: "503843314163",
  appId: "1:503843314163:web:e7c7d7b802290997fdda86"
};


const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);
export const auth=getAuth(app);
export const storage=getStorage(app);

