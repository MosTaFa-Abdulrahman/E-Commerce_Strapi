import "./home.scss";
import { slidess } from "../../dummyData";
import Slide from "../../components/slider/Slide";
import FeaturedProducts from "../../components/featuredProducts/FeaturedProducts";
import CaroSlide from "../../components/caroSlide/CaroSlide";
import Categories from "../../components/categories/Categories";

function Home() {
  return (
    <div className="home">
      <Slide slidesToShow={1} arrowsScroll={1}>
        {slidess.map((slide) => (
          <CaroSlide item={slide} key={slide.id} />
        ))}
      </Slide>

      <FeaturedProducts type="Featured" />
      <Categories />
      <FeaturedProducts type="Trending" />
    </div>
  );
}

export default Home;
