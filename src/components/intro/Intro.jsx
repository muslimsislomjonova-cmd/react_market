import "./intro.scss";

function Intro() {
  return (
    <div className="intro">
      <div className="container">
        <div className="left">
          <h1>New Laptop</h1>
          <p>Eng so‘nggi texnologiya</p>
          <button>Shop now</button>
        </div>

        <div className="right">
          <img src="/images/original.png"
          />
        </div>
      </div>
    </div>
  );
}

export default Intro;