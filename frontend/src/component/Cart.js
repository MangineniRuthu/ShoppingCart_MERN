import React from 'react'
import CartItems from './CartItems'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import CheckOut from './CheckOut';

export default function Cart() {
  const { cartItems = [], totalAmount = 0,totalQty } = useSelector((state) => state.cart || {});  
  const navigate=useNavigate();    
  return (
    <div className='cart'>
      <div className='cart_left'>
        <h2>Shopping Cart</h2>
        {cartItems.length === 0 ?(
          <>
          <p>Your Cart is Empty</p>
          <button onClick={()=>navigate("/")} type="button" className='btn_empty'>Continue Shopping</button>
          </>
          
        ):(
          cartItems.map((item)=><CartItems key={item._id} item={item}/>)
        )}
      </div>
      {cartItems.length===0?(<></>):(
        <div className='cart_right'>
        <div className='cart_info'>
          <p>SubTotal({totalQty}) Items</p>
          <p>${totalAmount.toFixed(2)}</p>
        </div>
        <div>
          <button onClick={()=>navigate("/checkOut")}>CheckOut</button>
        </div>
      </div>
      
      )}
      

    </div>
  )
}
