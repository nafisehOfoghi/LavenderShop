import "../Css/FeaturedCategories.css";

function FeaturedCategories() {
  return (
    <div className="featured-cat-list">
      <div className="first-col">
        <p className="title"> Do you want to have perfectly healthy skin?</p>
        <p className="sub-title"> Buy Here</p>
      </div>

      <div className="second-col">
        <div className="second-col section1">
          <p className="title"> Rose and shine</p>
          <p className="sub-title">Buy Here</p>
        </div>

        <div className="second-col section2">
          <p className="title">The purest scents</p>
          <p className="sub-title"> Buy Here</p>
        </div>
      </div>

      <div className="third-col">
        <p className="title"> With vitamin C</p>
        <p className="description">
        Made with natural antioxidants, our lotions leave skin clear and healthy
        </p>
        <p className="sub-title"> Buy Here</p>
      </div>
    </div>
  );
}

export default FeaturedCategories;
