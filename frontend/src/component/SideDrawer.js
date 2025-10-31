import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../index";
import { useSelector } from "react-redux";
import SignUp from "./SignUp";
import Login from "./Login";
import AuthContext from "./Context/AuthContext";

export default function SideDrawer({ show, click }) {
  const { totalQty = 0 } = useSelector((state) => state.cart);
  const [token, setToken] = useContext(AuthContext);
  const sidedrawerClass = ["sidedrawer"];
  if (show) {
    sidedrawerClass.push("show");
  }
    const handleLogout=()=>{
    setToken(null);
  }
  return (
    <div className={sidedrawerClass.join(" ")}>
      <ul onClick={click} className="side_links">
        {!token ? (
          <>
            <li>
              <Link to="/signUp">SignUp</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </>
        ) : (
          <li onClick={handleLogout}>
            <Link to="/">Logout</Link>
          </li>
        )}

        <li>
          <Link to="/cart" className="side_link">
            <i class="fa-solid fa-cart-shopping"></i>
            <span>
              Cart
              <span className="side_badge">{totalQty}</span>
            </span>
          </Link>
        </li>
        <li>
          <Link to="/">Shop</Link>
        </li>
      </ul>
    </div>
  );
}
