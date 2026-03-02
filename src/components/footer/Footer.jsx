import React from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-box">
          <h2 className="logo">BrandLogo</h2>
          <p>Biz ijtimoiy tarmoqlarda</p>

          <div className="social-icons">
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-linkedin-in"></i>
            <i className="fa-brands fa-facebook-f"></i>
          </div>
        </div>

        <div className="footer-box">
          <h3>Aloqa</h3>
          <p>Manzil: Toshkent sh</p>
          <p>qwertyui@gmail.com</p>
          <p>+998917777777</p>
        </div>

        <div className="footer-box">
          <h3>Haqimizda</h3>
          <p>Maxfiylik Siyosati</p>
          <p>Shaxsiy Ma'lumotlarni Himoya Qilish</p>
          <p>Mahsulotlarni va to'lovlarni qaytarish siyosati</p>
        </div>

        <div className="footer-box">
          <h3>Savol berish</h3>
          <input type="text" placeholder="Ismingiz" />
          <input type="text" placeholder="Telefon raqam" />
          <input type="text" placeholder="Savol berish..."></input >
          <button>Yuborish</button>
        </div>

      </div>

      <div className="footer-bottom">
        <p>2024 © notebook.uz MCHJ. Barcha huquqlar himoyalangan</p>
        <span>Hamkor: Clean coders group</span>
      </div>
    </footer>
  );
};

export default Footer;