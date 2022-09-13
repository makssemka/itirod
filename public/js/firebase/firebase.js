import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.0/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "https://www.gstatic.com/firebasejs/9.8.0/firebase-auth.js";
import {
  getDatabase,
  set,
  ref,
  get,
  child,
  onValue,
} from "https://www.gstatic.com/firebasejs/9.8.0/firebase-database.js";

// export const firebaseConfig = {
//   apiKey: "AIzaSyD9VQoz52JlobIDf60tzkXR0lUtxwXISEI",
//   authDomain: "alias-game-bf65e.firebaseapp.com",
//   databaseURL:
//     "https://alias-game-bf65e-default-rtdb.europe-west1.firebasedatabase.app",
//   projectId: "alias-game-bf65e",
//   storageBucket: "alias-game-bf65e.appspot.com",
//   messagingSenderId: "613335452117",
//   appId: "1:613335452117:web:8e11dcebd76bcf4e2d155c",
// };
// export const firebaseConfig = {
//   apiKey: "AIzaSyB8p9g3Wfo_L56_S_PtZvFo5aav9kRPD6Y",
//   authDomain: "alias-game-11cda.firebaseapp.com",
//   databaseURL:
//     "https://alias-game-bf65e-default-rtdb.europe-west1.firebasedatabase.app",
//   projectId: "alias-game-11cda",
//   storageBucket: "alias-game-11cda.appspot.com",
//   messagingSenderId: "232356960397",
//   appId: "1:232356960397:web:07129bccccee46ca092ac4",
//   measurementId: "G-39MJW34SP4",
// };
// export const firebaseConfig = {
//   apiKey: "AIzaSyDotOgTJi_sEopoaVHIOzglzGy2oji4n7U",
//   authDomain: "alias-31355.firebaseapp.com",
//   databaseURL:
//     "https://alias-22-default-rtdb.europe-west1.firebasedatabase.app",
//   projectId: "alias-31355",
//   storageBucket: "alias-31355.appspot.com",
//   messagingSenderId: "973642452260",
//   appId: "1:973642452260:web:4168095a467ed6d06f77b1",
//   measurementId: "G-KHY6BNH7XJ",
// };
const firebaseConfig = {
  apiKey: "AIzaSyDNeOea2u0G3FvZ7BNVZqgyYIVHFur8KeQ",
  authDomain: "alias-22.firebaseapp.com",
  databaseURL:
    "https://alias-22-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "alias-22",
  storageBucket: "alias-22.appspot.com",
  messagingSenderId: "72302923863",
  appId: "1:72302923863:web:da30afa9bf5717b8fed312",
  measurementId: "G-S508XL62NS",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase();
