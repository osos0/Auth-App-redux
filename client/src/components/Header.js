import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <div className="container fatherOfAuth">
        <div className="row headerAuth">
          <div className="col-lg-8 col-md-6 col-sm-6 headerAuthChildLeft">
            <Link to="/">
              <div>Auth app</div>
            </Link>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 headerAuthChildRigth">
            <Link to="/">
              <div>Home</div>
            </Link>
            <Link to="/about">
              <div>About</div>
            </Link>
            <Link to="/signin">
              <div>Signin</div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
