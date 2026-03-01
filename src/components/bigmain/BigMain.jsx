import React from "react";
import "./bigmain.scss";

const BigMain = () => {
  return (
    <div className="bigmain">
      <div className="container">

        <div className="top">
          <h2>Barcha Mahsulotlarimiz</h2>
        </div>

        <div className="products">

          <div className="card">
            <img src="/images/car.png" alt="" />
            <h3>Kids Electric Car</h3>
            <p className="price">$960</p>
          </div>

          <div className="card">
            <img src="/images/dogfood.png" alt="" />
            <h3>Breed Dry Dog Food</h3>
            <p className="price">$100</p>
          </div>

          <div className="card">
            <img src="/images/laptop.png" alt="" />
            <h3>ASUS FHD Gaming Laptop</h3>
            <p className="price">$700</p>
          </div>

          <div className="card">
            <img src="/images/product.png" alt="" />
            <h3>Curology Product Set</h3>
            <p className="price">$500</p>
          </div>

        </div>

        <div className="button">
          <button>Barchasini ko‘rish</button>
        </div>

      </div>
    </div>
  );
};

export default BigMain;