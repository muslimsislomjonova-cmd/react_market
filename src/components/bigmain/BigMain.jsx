import React, { useEffect, useState } from "react";
import "./bigmain.scss";

const BigMain = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=4")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="bigmain">
      <div className="container">
        <div className="top">
          <h2>Barcha Mahsulotlarimiz</h2>
        </div>

        <div className="products">
          {products.map((item) => (
            <div className="card" key={item.id}>
              <img src={item.image} alt={item.title} />
              <h3>{item.title}</h3>
              <p className="price">${item.price}</p>
            </div>
          ))}
        </div>

        <div className="button">
          <button>Barchasini ko‘rish</button>
        </div>
      </div>
    </div>
  );
};

export default BigMain;