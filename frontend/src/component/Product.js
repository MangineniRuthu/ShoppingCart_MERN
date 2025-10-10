import React,{useEffect,useState} from 'react';
import {Link} from "react-router-dom";
import axios from "axios";

export default function Product() {
  const [products,setProducts]=useState([]);
   const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get("https://shoppingcart-mern-fdxx.onrender.com/api/products");
        setProducts(data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching products:", err);
        setError("Failed to load products. Please try again later.");
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>{error}</p>;
  
 
  return (
     <>
    {products.map((product) => (
      <div key={product._id} className="product">
        <img src={product.imageUrl} alt={product.name} />
        <div className="product_info">
          <p className="info_name">{product.name}</p>
          <p className="info_des">{product.description}</p>
          <p className="info_price">${product.price}</p>
          <Link to={`/product/${product._id}`} className="info_btn">
            View
          </Link>
        </div>
      </div>
    ))}
  </>
  )
}
