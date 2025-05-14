import React from "react";
import { Link } from "react-router-dom";
import "./AppLanding.css";

const AppLanding = () => {
  return (
    <div className="app-landing">
      <div className="title-section">
        <p>{"GET\nSET\nGO!"}</p>
      </div>
      <div className="button-section">
        <Link to="/auth">
          <button className="get-started-btn">GET SET GO!</button>
        </Link>
      </div>
    </div>
  );
};

export default AppLanding;
