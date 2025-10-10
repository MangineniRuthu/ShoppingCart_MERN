import React from "react";
import { Link } from "react-router-dom";
import "../index";
import { useSelector } from "react-redux";

export default function Navbar({click}) {
  const {totalQty=0}=useSelector((state)=>state.cart)
  return (
    <nav className="navbar">
      <div className="navbar_logo">
        <img src="\images\m1.png" alt="company_logo"/>
      </div>
      <ul className="navbar_links">
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
