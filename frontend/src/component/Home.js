import React, { useContext, useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import "../index";
import Product from "./Product";
import AuthContext from "./Context/AuthContext";
import Login from "./Login";
import axios from "axios";
import Admin from "./Admin"

export default function Home() {
  const [token, setToken] = useContext(AuthContext);
  const [data, setData] = useState(null);
  useEffect(() => {
    axios
      .get("https://shoppingcart-mern-fdxx.onrender.com/admin", {
        headers: {
          "x-token": token,
        },
      })
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
  if (!token) {
    return <Navigate to="/admin" />;
  }
  return (
    <div className="home">
      {data && (
        <>
          <h2 className="home_title">Latest Products</h2>
          <div className="home_products">
            <Product />
          </div>
        </>
      )}
    </div>
  );
}
