import "./cart.scss";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, resetCart } from "../../redux/cartSlice";
import { loadStripe } from "@stripe/stripe-js";
import { publicRequest } from "../../requestMethod";

function Cart() {
  const { products } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const totalPrice = () => {
    let total = 0;
    products.forEach((item) => (total += item.quantity * item.price));
    return total.toFixed(2);
  };

  // Payment
  const stripePromise = loadStripe(
    "pk_test_51LNo35G2b2rR7T8ZgNtXkYAQ3SdWMwlY9wMMDcn6wRghAB4nMCucWbqEC92XBwpb2JpDiwT7TQBrPWtriMQrL1ol002mQNkCs0"
  );

  const handleCheckout = async () => {
    try {
      const stripe = await stripePromise;
      const res = await publicRequest.post("/orders", { products });

      await stripe.redirectToCheckout({ sessionId: res.data.stripeSession.id });
    } catch (error) {
      console.log(error);
      alert("You Must Add Products 🥰");
    }
  };

  return (
    <div className="cart">
      <h1>Cart Products</h1>
      {products.map((item) => (
        <div className="item" key={item.id}>
          <img src={item.img} alt="" />
          <div className="details">
            <h1>{item.title}</h1>
            <NavLink to={`/product/${item.id}`} className="link">
              <p>{item.desc?.substring(0, 22) + " ..."}</p>
            </NavLink>
            <div className="price">
              {item.quantity} × {item.price} $
            </div>
          </div>
          <i
            className="fa-solid fa-trash myTrash"
            onClick={() => dispatch(removeFromCart(item.id))}
          ></i>
        </div>
      ))}

      <div className="total">
        <span>SupTotal</span>
        <span>{totalPrice()}$</span>
      </div>

      <button onClick={handleCheckout}>Checkout 😘</button>
      <span className="reset" onClick={() => dispatch(resetCart())}>
        Reset Cart
      </span>
    </div>
  );
}

export default Cart;
