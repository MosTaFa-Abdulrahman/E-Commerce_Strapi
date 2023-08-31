import "./caroSlide.scss";

// From Home Page
function CaroSlide({ item }) {
  return (
    <div className="caroSlide">
      <img src={item.img} alt="" />
    </div>
  );
}

export default CaroSlide;
