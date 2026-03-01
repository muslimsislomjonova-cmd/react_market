import React from "react";
import "./ommabop.scss";

const Ommabop = () => {
  return (
    <section className="ommabop">
      <div className="container">

        <div className="feature-card">
          <div className="icon-wrapper">
            <img src="/" alt="Bepul" />
          </div>
          <h3>BEPUL VA TEZ YETKAZIB BERISH</h3>
          <p>Buyurtmalar uchun bepul yetkazib berish</p>
        </div>

        <div className="feature-card">
          <div className="icon-wrapper">
            <img src="/" alt="24/7" />
          </div>
          <h3>24/7 MIJOZLARGA XIZMAT KO'RSATISH</h3>
          <p>Do'stona 24/7 mijozlarni qo'llab-quvvatlash</p>
        </div>

        <div className="feature-card">
          <div className="icon-wrapper">
            <img src="/" alt="Pul" />
          </div>
          <h3>PULNI QAYTARIB BERISH KAFOLATI</h3>
          <p>Biz pulni 30 kun ichida qaytaramiz</p>
        </div>

      </div>
    </section>
  );
};

export default Ommabop;