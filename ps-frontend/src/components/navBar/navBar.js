import React from "react";
import "./navBar.css";
import AuthContext from "../../context/auth-context";
import { useContext } from "react";
import image from "../../resources/images/logout02.png";

const Navbar = () => {
  const ctx = useContext(AuthContext)

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-title">Product Sheet</h1>
      </div>
      <div className="logout-button">
        {ctx.isLoggedIn && (
          //THE LOGOUT BUTTON IS HERE
          <img className="logout-image" onClick={ctx.onLogout} src={image} alt="Log out"></img>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
