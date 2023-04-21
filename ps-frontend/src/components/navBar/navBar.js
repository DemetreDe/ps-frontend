import React from "react";
import "./navBar.css";
import AuthContext from "../../context/auth-context";
import { useContext } from "react";
import image from "../../resources/images/logout02.png";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const ctx = useContext(AuthContext)
  let location = useLocation();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-title">Product Sheet</h1>
      </div>

      {ctx.isLoggedIn && (
        <ul className="nav-items">
          {location.pathname !== "/products/create" && (
            <li>
              <Link className="nav-link" to={{ pathname: `/products/create` }}>
                <p>Create</p>
              </Link>
            </li>
          )}
          {location.pathname !== "/products" && (
            <li>
              <Link className="nav-link" to={{ pathname: `/products` }}>
                <p>Products</p>
              </Link>
            </li>
          )}
          <li className="logout-button">
            <img className="logout-image" onClick={ctx.onLogout} src={image} alt="Log out"></img>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
