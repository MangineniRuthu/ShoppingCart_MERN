import React from "react";
import { Link } from "react-router-dom";
import "../index";

export default function Admin() {
  return (
    <>
      <div className="admin">
        <div className="admin-left">
          <img
            src="./images/ruth3.jpeg"
            alt="brand_head_logo"
            className="brand-logo"
          />
        </div>
        <div className="admin-right">
          <p>
            <h3>Welcome to Thamma Online Shopping</h3>
            <br />
            <h5>This is more than just a brand it’s a part of my heart❤️.</h5>
            <br />
            <h5>
              🌸 “Thamma” comes from my own name, given to me by my grandparents
              and loved ones. Every time you see it, it carries the warmth of
              family, love, and dreams. I’m truly excited to share this journey
              with you. While this website is a reflection of my skills for now,
              I dream of bringing you an amazing online shopping experience in
              the near future. <br />
              <br />✨<i>Sign up</i> now to be part of this journey and start
              shopping with love and purpose!
            </h5>
          </p>
          <br />
        </div>
      </div>
      <div className="brand">
        <h2>Upcoming design with brand Logo</h2>
        <div className="future-brand">
          <img src="./images/brand1.png" alt="brand" />
          <img src="./images/b2.png" alt="brand" />
          <img src="./images/b3.png" alt="brand" />
          <img src="./images/b4.png" alt="brand" />
          <img src="./images/b5.png" alt="brand" />
          <img src="./images/b6.png" alt="brand" />
          <img src="./images/b7.png" alt="brand" />
        </div>
      </div>
    </>
  );
}
