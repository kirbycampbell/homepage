import React from "react";
import "../css/NavBar.css";
import { Link, withRouter } from "react-router-dom";

const Navbar = withRouter(({ history }) => {
  return (
    <div>
      <div className="navbar">
        <div className="navcontent">
          <Link className="links navbox" to="/Post/hVZy6MM5c3ex2eTx63dL">
            Example Blog Post
          </Link>

          <Link className="links navbox" to="/">
            Create Blog Post
          </Link>
          <Link className="links navbox" to="/Kirby">
            Kirby's Blog
          </Link>
          <Link className="links navbox" to="/Login">
            Account
          </Link>
        </div>
      </div>
    </div>
  );
});

export default Navbar;

//
//<div className="navbox">Account</div>
