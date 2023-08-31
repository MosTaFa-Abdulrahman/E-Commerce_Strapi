import { Link } from "react-router-dom";
import "./card.scss";

// From (FeaturedProducts + List)
function Card({ item }) {
  return (
    <div className="card">
      <div className="image">
        {item?.attributes.isNew && <span>New Season</span>}
        <Link className="link" to={`/product/${item.id}`}>
          <img
            src={
              "http://localhost:1337" +
              item.attributes?.img?.data?.attributes?.url
            }
            alt=""
            className="mainImg"
          />
          <img
            src={
              "http://localhost:1337" +
              item.attributes?.img2?.data?.attributes?.url
            }
            alt=""
            className="secondImg"
          />
        </Link>
      </div>
      <h2>{item?.attributes.title}</h2>
      <div className="prices">
        <h3>{item.oldPrice || item?.attributes.price + 12}$</h3>
        <h3>${item?.attributes.price}</h3>
      </div>
    </div>
  );
}

export default Card;
