import React from "react";
import CartItems from "./CartItems";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearCart } from "../redux/reducer/cartReducer";

export default function Cart() {
  const {
    cartItems = [],
    totalAmount = 0,
    totalQty,
  } = useSelector((state) => state.cart || {});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCheckOut = () => {
    dispatch(clearCart());
    navigate("/checkOut");
  };
  const handleItems=()=>{
    navigate("/");
  }
  return (
    <div className="cart">
      <div className="cart_left">
        <h2>Shopping Cart</h2>
        {cartItems.length === 0 ? (
          <>
            <p>Your Cart is Empty</p>
            <button
              onClick={() => navigate("/")}
              type="button"
              className="btn_empty"
            >
              Keep Shopping
            </button>
          </>
        ) : (
          cartItems.map((item) => <CartItems key={item._id} item={item} />)
        )}
      </div>
      {cartItems.length === 0 ? (
        <></>
      ) : (
        <div className="cart_right">
          <div className="cart_info">
            <p>SubTotal({totalQty}) Items</p>
            <p>${totalAmount.toFixed(2)}</p>
          </div>
          <div>
            <button onClick={handleCheckOut}>CheckOut</button>
          </div>
          <div>
            <button onClick={handleItems}>Add More Items</button>
          </div>
        </div>
      )}
    </div>
  );
}
