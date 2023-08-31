import "./list.scss";
import Card from "../card/Card";
import useFetch from "../../hooks/useFetch";

// From Products Page
function List({ catId, max, sort, selectedSubCats }) {
  const { data, loading, error } = useFetch(
    `/products?populate=*&filters[categories][id][$eq]=${catId}${selectedSubCats.map(
      (item) => `&filters[sub_categories][id][$lte]=${item}`
    )}&filters[price][$lte]=${max}&sort=${sort}`
  );

  return (
    <div className="list">
      {loading
        ? "Wait For Loading"
        : error
        ? "Error !!~~"
        : data?.map((item) => <Card item={item} key={item.id} />)}
    </div>
  );
}

export default List;
