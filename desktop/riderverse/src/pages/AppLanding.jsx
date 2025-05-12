import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/AppLanding.css";

const AppLanding = () => {
  return (
    <div className="app-landing">
      <div className="title-section">
        <h1>Welcome to Riderverse</h1>
        <p>The social ride starts here.</p>
      </div>

      <div className="button-section">
        <Link to="/auth">
          <button className="get-started-btn">Get Started</button>
        </Link>
      </div>
    </div>
  );
};

export default AppLanding;
