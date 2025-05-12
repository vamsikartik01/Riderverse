// src/pages/Auth.jsx
import React from "react";
import GoogleAuthButtons from "../components/GoogleAuthButtons";

const Auth = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "3rem" }}>
      <h1>🔐 Riderverse Auth</h1>
      <p>Login or Signup with Google to join the pack.</p>
      <GoogleAuthButtons />
    </div>
  );
};

export default Auth;
