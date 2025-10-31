import React,{useContext} from "react";
import { Link } from "react-router-dom";
import "../index";
import { useSelector } from "react-redux";
import AuthContext from "./Context/AuthContext";


export default function Navbar({ click }) {
  const { totalQty = 0 } = useSelector((state) => state.cart);
  const [token,setToken]=useContext(AuthContext);
  const handleLogout=()=>{
    setToken(null);
  }

  return (
    <nav className="navbar">
      <div className="navbar_logo">
        <img src="\images\m1.png" alt="company_logo" />
      </div>
      <ul className="navbar_links">
        {!token?(
          <>
          <li>
          <Link to="/signUp">SignUp</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
          </>
        )
        :(
           <li  onClick={handleLogout} ><Link to="/">Logout</Link></li>
        )}
        <li>
          <Link to="/cart" className="cart_link">
            <i class="fa-solid fa-cart-shopping"></i>
            <span>
              Cart
              <span className="shopping_badge">{totalQty}</span>
            </span>
          </Link>
        </li>
        <li>
          <Link to="/">Shop</Link>
        </li>
      </ul>
      <div className="hamburger" onClick={click}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
}
