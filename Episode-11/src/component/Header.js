import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  var [btnNameReact, setBtnNameReact] = useState("Login");
  // console.log("header render");

  const onlineStatus = useOnlineStatus();

  const {loggedInUser} = useContext(UserContext)
 

  return (
    <div className="flex justify-between border-b-2 border-slate-200">
      <div className="logo-container">
        <img className="w-40 p-2 pl-4" src={LOGO_URL} alt="logo" />
      </div>

      <div className="flex items-center">
        <ul className="flex p-4 m-4 gap-x-10 text-xl">
          <li>Online Status: {onlineStatus ? "✅" : "🔴"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
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

          <li className="font-semibold text-sm " >{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
