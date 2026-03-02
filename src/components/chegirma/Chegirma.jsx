import React, { useEffect, useState } from "react";
import "./chegirma.scss";

const Chegirma = () => {
  const [products, setProducts] = useState([]);

 
  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=4")
      .then((res) => res.json())
      .then((data) => {
        
        const updated = data.map((item) => ({
          ...item,
         
        }));
        setProducts(updated);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className="chegirma">
      <div className="container">
        <div className="top">
          <h2>Yangi chegirmalar</h2>

          <div className="timer">
            <div>
              <p>Days</p>
              <span>03</span>
            </div>
            <div>
              <p>Hours</p>
              <span>23</span>
            </div>
            <div>
              <p>Minutes</p>
              <span>19</span>
            </div>
            <div>
              <p>Seconds</p>
              <span>56</span>
            </div>
          </div>
        </div>

        <div className="cards">
          {products.map((item) => (
            <div className="card" key={item.id}>
              <div className="discount">-30%</div>

              <div className="image">
                <img src={item.image} alt={item.title} />
              </div>

              <h3>{item.title}</h3>

              <div className="price">
                <span className="new">${item.price}</span>
                <span className="old">${item.oldPrice}</span>
              </div>

              <button>Buyurtma berish</button>
            </div>
          ))}
        </div>

        <div className="center-btn">
          <button className="all-btn">Barcha ko‘rish</button>
        </div>
      </div>
    </section>
  );
};

export default Chegirma;