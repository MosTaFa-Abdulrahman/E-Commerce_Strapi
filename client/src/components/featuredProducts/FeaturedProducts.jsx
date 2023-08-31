import "./featuredProducts.scss";
import Card from "../card/Card";
import useFetch from "../../hooks/useFetch";

// From Home
function FeaturedProducts({ type }) {
  const { data, loading, error } = useFetch(
    `/products?populate=*&filters[type][$eq]=${type}`
  );

  return (
    <div className="featuredProducts">
      <h1>{type} Products</h1>

      <div className="bottom">
        {loading
          ? "Wait For Loading !!"
          : error
          ? "Error !!~~"
          : data?.map((item) => <Card item={item} key={item.id} />)}
      </div>
    </div>
  );
}

export default FeaturedProducts;
