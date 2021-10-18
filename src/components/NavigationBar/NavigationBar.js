import React from "react";
import { Link } from "react-router-dom";
import "./NavigationBar.css";
import * as ROUTES from "../../constants/routes";
import { useAuth } from "../../context/AuthContext";

const NavigationBar = () => {
  const auth = useAuth();
  return (
    <header className="NavigationBar">
      <div>
        <h3>connectu</h3>
      </div>
      <nav>
        <ul>
          <Link to={ROUTES.HOME}>
            <li className="menuItem">Home</li>
          </Link>
          {auth.user ? (
            <React.Fragment>
              <Link to={ROUTES.WEB_APP}>
                <li className="menuItem" >Vacancies</li>
              </Link>
              <Link to={ROUTES.WEB_APP}>
                <li className="menuItem" >Procurement Contract</li>
              </Link>
              <Link to={ROUTES.WEB_APP}>
                <li className="menuItem" >Schedule Interview</li>
              </Link>
              <li className="menuItem" id="signOutBtn" onClick={() => auth.signout()}>Sign Out</li>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Link to={ROUTES.ANSWERS}>
                <li className="menuItem" >QnA</li>
              </Link>
              <Link to={ROUTES.SURVEY}>
                <li className="menuItem">About</li>
              </Link>
              <Link to={ROUTES.LOGIN}>
                <li className="menuItem" id="loginBtn">Login</li>
              </Link>
              <Link to={ROUTES.SIGN_UP}>
                <li className="menuItem" id="signUpBtn">Sign Up</li>
              </Link>
            </React.Fragment>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default NavigationBar;
