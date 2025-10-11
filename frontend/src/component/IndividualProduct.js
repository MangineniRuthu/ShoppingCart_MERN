import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { addCartItem } from "../redux/reducer/cartReducer";
import { toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function IndividualProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate=useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          `https://shoppingcart-mern-fdxx.onrender.com/api/products/${id}`
        );
        setProduct(data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch product");
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!product) return <p>Product not found.</p>;

  return (
    <div className="product_ind">
      <div className="product_left">
        <div className="left_img">
          <img src={product.imageUrl} alt={product.name} />
        </div>
        <div className="left_info">
          <p className="left_name">{product.name}</p>
          <p>Price: {product.price}</p>
          <p>Description:{product.description}</p>
        </div>
      </div>
      <div className="product_right">
        <div className="right_info">
          <p>
            Price:<span>${product.price}</span>
          </p>
          <p>
            Stock:<span>In Stock</span>
          </p>
          <p>
            Qty
            <select>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </p>
          <p>
            <button
              type="button"
              onClick={() => {
                dispatch(addCartItem(product));
                toast.success("Item added to cart!");
                navigate("/cart"); 
                 
              }}
            >
              Add To Cart
            </button>
            
          </p>
        </div>
      </div>
    </div>
  );
}
