import React from 'react';
import "../index.css";
import { useNavigate } from 'react-router-dom';

export default function CheckOut() {
  const navigate=useNavigate();
  return (
    <div className='checkout'>
        <p>Your order has been placed successfully!</p>
        <button onClick={()=>navigate("/")} type="button" className='btn_empty'>Keep Shopping</button>
    </div>
  )
}
