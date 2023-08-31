import "./product.scss";
import { useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";

function Product() {
  const productId = parseInt(useParams().id);

  const [selectedImg, setSelectedImg] = useState("img");
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();

  const { data, loading, error } = useFetch(
    `/products/${productId}?populate=*`
  );

  //  ADD TO Cart
  const addToCartFunc = () => {
    dispatch(
      addToCart({
        id: data.id,
        title: data.attributes.title,
        desc: data.attributes.desc,
        img: "http://localhost:1337" + data.attributes.img.data.attributes.url,
        price: data.attributes.price,
        quantity,
      })
    );
  };

  return (
    <div className="product">
      {loading ? (
        "Wait For Loading !"
      ) : error ? (
        "Error !!~~"
      ) : (
        <>
          <div className="left">
            <div className="subImages">
              <img
                src={
                  "http://localhost:1337" +
                  data?.attributes?.img?.data?.attributes?.url
                }
                alt=""
                onClick={() => setSelectedImg("img")}
              />
              <img
                src={
                  "http://localhost:1337" +
                  data?.attributes?.img2?.data?.attributes?.url
                }
                alt=""
                onClick={() => setSelectedImg("img2")}
              />
            </div>
            <div className="mainImage">
              <img
                src={
                  "http://localhost:1337" +
                  data?.attributes[selectedImg]?.data?.attributes?.url
                }
                alt=""
              />
            </div>
          </div>

          <div className="right">
            <h2>{data?.attributes?.title}</h2>
            <h3>{data?.attributes?.price}$</h3>
            <p>{data?.attributes?.desc}</p>
            <div className="quantity">
              <span
                className="sign"
                onClick={() =>
                  setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
                }
              >
                -
              </span>
              <span className="qNum">{quantity}</span>
              <span
                className="sign"
                onClick={() => setQuantity((prev) => prev + 1)}
              >
                +
              </span>
            </div>
            <button className="cartBtn" onClick={addToCartFunc}>
              ADD TO CART <i className="fa-solid fa-cart-shopping"></i>
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Product;
