import "./products.scss";
import List from "../../components/list/List";
import { useParams } from "react-router-dom";
import { useState } from "react";
import useFetch from "../../hooks/useFetch";

function Products() {
  const catId = parseInt(useParams().id);

  const [max, setMax] = useState(1000);
  const [sort, setSort] = useState(null);
  const [selectedSubCats, setSelectedSubCats] = useState([]);

  const { data, loading, error } = useFetch(
    `/sub-categories?filters[categories][id][$eq]=${catId}`
  );

  const handleChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    setSelectedSubCats(
      isChecked
        ? [...selectedSubCats, value]
        : selectedSubCats.filter((item) => item !== value)
    );
  };

  return (
    <div className="products">
      <div className="left">
        <div className="filterItem">
          <h2>Product Categories</h2>

          {data?.map((item) => (
            <div className="inputItem" key={item.id}>
              <input
                type="checkbox"
                id={item?.id}
                value={item?.id}
                onChange={handleChange}
              />
              <label htmlFor={item?.id}>{item?.attributes?.title}</label>
            </div>
          ))}
        </div>

        <div className="filterItem">
          <h2>Filter Price</h2>
          <div className="inputItem">
            <span>0</span>
            <input
              type="range"
              min={0}
              max={1000}
              onChange={(e) => setMax(e.target.value)}
            />
            <span>{max}</span>
          </div>
        </div>

        <div className="filterItem">
          <h2>Sort BY</h2>
          <div className="inputItem">
            <input
              type="radio"
              id="desc"
              value="desc"
              name="price"
              onChange={() => setSort("desc")}
            />
            <label htmlFor="desc">Price (Lowest)</label>
          </div>
          <div className="inputItem">
            <input
              type="radio"
              id="asc"
              value="asc"
              name="price"
              onChange={() => setSort("asc")}
            />
            <label htmlFor="asc">Price (Highest)</label>
          </div>
        </div>
      </div>

      <div className="right">
        <img
          src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
          className="catImg"
        />
        <List
          catId={catId}
          max={max}
          sort={sort}
          selectedSubCats={selectedSubCats}
        />
      </div>
    </div>
  );
}

export default Products;
