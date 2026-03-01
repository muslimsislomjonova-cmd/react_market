import React from "react";
import "./chegirma.scss";

const products = [
  {
    id: 1,
    name: "HAVIT HV-G92 Gamepad",
    price: 120,
    oldPrice: 160,
    img: "https://via.placeholder.com/200x150",
  },
  {
    id: 2,
    name: "S-Series Comfort Chair",
    price: 375,
    oldPrice: 400,
    img: "https://via.placeholder.com/200x150",
  },
  {
    id: 3,
    name: "IPS LCD Gaming Monitor",
    price: 370,
    oldPrice: 400,
    img: "https://via.placeholder.com/200x150",
  },
  {
    id: 4,
    name: "S-Series Comfort Chair",
    price: 375,
    oldPrice: 400,
    img: "https://via.placeholder.com/200x150",
  },
];

const Chegirma = () => {
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
              <div className="discount">-35%</div>

              <div className="image">
                <img src={item.img} alt={item.name} />
              </div>

              <h3>{item.name}</h3>

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