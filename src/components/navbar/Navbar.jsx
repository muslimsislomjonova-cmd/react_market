import "./navbar.scss";

function Navbar() {
  return (
    <div className="navbar">
      <div className="container">
        <h2>BrandLogo</h2>
        <ul>
          <li>Bosh sahifa</li>
          <li>Katalog</li>
          <li>Haqimizda</li>
          <li>Aloqa</li>
        </ul>
        <button>Aloqaga chiqish</button>
      </div>
    </div>
  );
}

export default Navbar;