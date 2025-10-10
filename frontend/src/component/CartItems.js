import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import{updateQty,removeItem} from "../redux/reducer/cartReducer"

export default function CartItems({ item }) {
  const dispatch=useDispatch();
  const handleQty=(e)=>{
    const qty=Number(e.target.value);
    dispatch(updateQty({id:item._id,qty}))

  }

  const handleRemove=()=>{
      dispatch(removeItem(item._id))
  }
  return (
    <div className="cartitem">
      <div className="cartitem_img">
        <img src={item.imageUrl} alt="product name" />
      </div>
      <Link to={`/product/${item._id}`} className="cartitem_name">
        <p>{item.name} </p>
      </Link>
      <p className="cartitem_price">${item.price * item.qty}</p>
      <select className="cartitem_select" value={item.qty} onChange={handleQty}>
        {[1, 2, 3, 4, 5].map((x) => (
          <option key={x} value={x}>{x}</option>
        ))}
      </select>
      <button className="cartitem_delbtn" onClick={handleRemove}>
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
}
