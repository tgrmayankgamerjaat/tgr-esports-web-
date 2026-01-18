import { auth, db } from "./firebase.js";
import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

onAuthStateChanged(auth, async user => {
  if(user){
    const docRef = doc(db, "users", user.uid);
    const docSnap = await getDoc(docRef);
    if(docSnap.exists()){
      const data = docSnap.data();
      document.getElementById("userInfo").innerHTML = `
        <p>Name: ${data.name}</p>
        <p>Email: ${data.email}</p>
        <p>Coins: ${data.coins}</p>
        <p>Plan: ${data.plan || "No plan"}</p>
      `;
    }
  } else {
    window.location.href = "index.html";
  }
});

document.getElementById("logout").onclick = () => {
  signOut(auth);
};
