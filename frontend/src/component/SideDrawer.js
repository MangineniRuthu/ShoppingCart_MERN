import React from 'react';
import {Link} from "react-router-dom"
import "../index"
import { useSelector } from 'react-redux';

export default function SideDrawer({show,click}) {
  const {totalQty=0}=useSelector((state)=>state.cart)
    const sidedrawerClass=["sidedrawer"];
    if(show){
        sidedrawerClass.push("show");
    }
  return (
    <div className={sidedrawerClass.join(" ")}>
        <ul onClick={click} className="side_links" >
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
  )
}
