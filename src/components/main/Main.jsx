import React from "react";
import "./main.scss";

const categories = [
  {
    id: 1,
    name: "Telefon",
    img: "",
  },
  {
    id: 2,
    name: "Kompyuter",
    img: "",
  },
  {
    id: 3,
    name: "Aqlli soatlar",
    img: "",
  },
  {
    id: 4,
    name: "Kamera",
    img: "",
    active: true,
  },
  {
    id: 5,
    name: "Quloqchinlar",
    img: "",
  },
  {
    id: 6,
    name: "Aksessuarlar",
    img: "",
  },
];

const Main = () => {
  return (
    <main className="main">
      <div className="container">
        <h1>Kataloglar</h1>

        <div className="category-wrapper">
          {categories.map((item) => (
            <div
              key={item.id}
              className={`category-card ${item.active ? "active" : ""}`}
            >
              <img src={item.img} alt={item.name} />
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Main;