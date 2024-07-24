import { useState } from "react";
import Cart from "./Cart";
import "../styles/Cart.css";
import "../styles/Header.css";
import { Link, NavLink } from "react-router-dom";
function Header() {
  const [cart, setCart] = useState(false);
  const handleCartClick = () => {
    setCart(true);
  };
  const handleCloseCart = () => {
    setCart(false);
  };
  return (
    <>
      <div className="account_div">
        <div className="account_box">
          <i className="fa-solid fa-circle-user"></i>
          <Link className="raleway login">Log In</Link>
        </div>
      </div>
      <nav className="jsb_flex">
        <div className="logo_box">
          <Link to="/" className="forum-regular">
            Lumière
          </Link>
        </div>
        <div className="menu_box jsb_flex">
          <ul className="menu jsb_flex raleway">
            <li>
              <NavLink to="/reservations">reservations</NavLink>
            </li>
            <li>
              <NavLink to="/menu">menu</NavLink>
            </li>
            <li>
              <NavLink to="/about">about</NavLink>
            </li>
            <li>
              <NavLink to="/contact">contact</NavLink>
            </li>
          </ul>
          <i className="fa-brands fa-opencart" onClick={handleCartClick}></i>
          <button className="forum-regular" id="order">
            order online
          </button>
        </div>
      </nav>
      {cart && <Cart class_name={`cart ${cart ? "open" : ""}`} />}
      {cart && <div className="overlay" onClick={handleCloseCart}></div>}
    </>
  );
}

export default Header;
