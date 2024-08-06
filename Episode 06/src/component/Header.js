import { useState } from "react";
import { LOGO_URL } from "../utils/constant";

const Header = () => {
  var [btnNameReact, setBtnNameReact] = useState("Login");
  console.log("header render");

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="logo" />
      </div>

      <div className="nav-itmes">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Cart</li>
          <li>Help</li>
          <li>Sign In</li>
          <button
            className="login-btn"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
              // console.log(btnNameReact);
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
