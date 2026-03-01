import React from "react";
import "./new.scss";

const New = () => {
  return (
    <div className="new">
      <h2>Yangi mahsulotlar</h2>

      <div className="container">
        <div className="left">
          <img src="/img/ps.png" alt="PlayStation 5" />
        
        </div>

        <div className="right">
          <div className="top">
            <img src= "/img/ps.png" alt="Women’s Collections" />
          
          </div>

          <div className="bottom">
            <div className="card">
              <img src= "/img/ps.png" alt="Speakers" />
          
             
            </div>

            <div className="card">
              <img src="/img/ps.png" alt="Perfume" />
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;