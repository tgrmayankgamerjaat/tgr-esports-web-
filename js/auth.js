import { auth, db } from "./firebase.js";
import { GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword } 
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { doc, setDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// Google Login
const provider = new GoogleAuthProvider();
document.getElementById("googleLogin").onclick = async () => {
  const result = await signInWithPopup(auth, provider);
  const user = result.user;
  await setDoc(doc(db, "users", user.uid), {
    name: user.displayName,
    email: user.email,
    coins: 0,
    plan: null,
    createdAt: Date.now()
  }, { merge: true });
  window.location.href = "home.html";
};

// Email Login / Register
document.getElementById("emailLogin").onclick = async () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  try {
    const result = await signInWithEmailAndPassword(auth, email, password);
    window.location.href = "home.html";
  } catch (e) {
    // If user does not exist → create
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    await setDoc(doc(db, "users", user.uid), {
      name: email.split("@")[0],
      email: email,
      coins: 0,
      plan: null,
      createdAt: Date.now()
    }, { merge: true });
    window.location.href = "home.html";
  }
};
