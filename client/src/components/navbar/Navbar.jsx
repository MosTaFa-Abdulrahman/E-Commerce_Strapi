import "./navbar.scss";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import Cart from "../cart/Cart";
import { useSelector } from "react-redux";

const links = [
  { id: 1, title: "About", url: "/" },
  { id: 2, title: "Contact", url: "/" },
  { id: 3, title: "Stores", url: "/" },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const { products } = useSelector((state) => state.cart);

  return (
    <div className="navbar">
      <div className="container">
        <div className="left">
          <span>Men</span>
          <span>Women</span>
        </div>

        <div className="center">
          <NavLink to="/" className="link">
            <h2>DARSHSTORE 🚀</h2>
          </NavLink>
        </div>

        <div className="right">
          {links.map((item) => (
            <NavLink to={item.url} key={item.id} className="link">
              {item.title}
            </NavLink>
          ))}

          <div className="icons">
            <i className="fa-solid fa-magnifying-glass"></i>
            <i className="fa-regular fa-heart"></i>
            <div className="cartIcon" onClick={() => setOpen(!open)}>
              <i className="fa-solid fa-cart-shopping"></i>
              <span>{products.length}</span>
            </div>
          </div>
        </div>
      </div>

      {open && <Cart />}
    </div>
  );
}

export default Navbar;
