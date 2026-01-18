import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyCvKPcHOPYHGMtwkXtiJzVXfSa0CFjisyE",
  authDomain: "tgr-web-b0cc4.firebaseapp.com",
  projectId: "tgr-web-b0cc4",
  storageBucket: "tgr-web-b0cc4.firebasestorage.app",
  messagingSenderId: "525244286169",
  appId: "1:525244286169:web:30ca6e146c5e391482aac8"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
