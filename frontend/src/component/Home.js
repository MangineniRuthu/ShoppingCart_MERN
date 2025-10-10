import React from "react";
import "../index";
import Product from "./Product"

export default function Home() {
  return (
    <div className="home">
      <h2 className="home_title">Latest Products</h2>
      <div className="home_products">
        <Product/>
      </div>
    </div>
  );
}
