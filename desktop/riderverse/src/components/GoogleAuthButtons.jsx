// src/components/GoogleAuthButtons.jsx
import React from "react";
import { auth, provider, signInWithPopup } from "../services/firebase";

const GoogleAuthButtons = () => {
  const handleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("Signed in:", user);
      // Redirect or show home screen here
    } catch (error) {
      console.error("Sign in error", error);
    }
  };

  const handleSignUp = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("Signed up:", user);
      // You can add custom logic here if needed
    } catch (error) {
      console.error("Sign up error", error);
    }
  };

  return (
    <div>
      <button onClick={handleSignIn} style={{ margin: "10px" }}>
        Sign in with Google
      </button>
      <button onClick={handleSignUp}>
        Sign up with Google
      </button>
    </div>
  );
};

export default GoogleAuthButtons;
