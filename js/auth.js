// auth.js (shared for login, signup & logout)

// Firebase imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut
} from "https://www.gstatic.com/firebasejs/12.7.0/firebase-auth.js";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBp_fIgESsV-3pSpmH_7wTT3kPjIqfR3GE",
  authDomain: "chronox-auth.firebaseapp.com",
  projectId: "chronox-auth",
  storageBucket: "chronox-auth.firebasestorage.app",
  messagingSenderId: "377122580496",
  appId: "1:377122580496:web:6d3c7026843ddcc7b94295"
};

// Init Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

/* ---------------- ERROR TRANSLATOR ---------------- */
function getAuthErrorMessage(error) {
  switch (error.code) {
    case "auth/user-not-found":
    case "auth/invalid-credential":
      return "Incorrect email or password.";

    case "auth/wrong-password":
      return "Incorrect password.";

    case "auth/invalid-email":
      return "Invalid email address.";

    case "auth/email-already-in-use":
      return "This email is already registered.";

    case "auth/weak-password":
      return "Password must be at least 6 characters.";

    case "auth/network-request-failed":
      return "No internet connection. Check your network.";

    case "auth/too-many-requests":
      return "Too many attempts. Try again later.";

    default:
      return "Something went wrong. Please try again.";
  }
}

/* ---------------- SHOW TOAST AFTER NAVIGATION ---------------- */
window.addEventListener("DOMContentLoaded", () => {
  const message = localStorage.getItem("toastMessage");
  if (message) {
    showToast(message);
    localStorage.removeItem("toastMessage");
  }
});

/* ---------------- LOGIN ---------------- */
const loginForm = document.getElementById("login-form");
if (loginForm) {
  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      localStorage.setItem("toastMessage", "Login successful");
      window.location.href = "home.html";
    } catch (error) {
      showToast(getAuthErrorMessage(error));
    }
  });
}

/* ---------------- SIGN UP ---------------- */
const signupForm = document.getElementById("signup-form");
if (signupForm) {
  signupForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      localStorage.setItem("toastMessage", "Account created. Please log in.");
      window.location.href = "index.html";
    } catch (error) {
      showToast(getAuthErrorMessage(error));
    }
  });
}

/* ---------------- LOGOUT ---------------- */
const logoutBtn = document.getElementById("logout-btn");
if (logoutBtn) {
  logoutBtn.addEventListener("click", async (e) => {
    e.preventDefault();

    try {
      await signOut(auth);
      localStorage.setItem("toastMessage", "Logged out successfully");
      window.location.href = "index.html";
    } catch (error) {
      showToast("Logout failed. Try again.");
    }
  });
}