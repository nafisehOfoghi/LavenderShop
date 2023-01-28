import "../Css/FeaturedCategories.css";

function FeaturedCategories() {
  return (
    <div className="featured-cat-list">
      <div className="first-col">
        <p className="title"> می خواهید پوستی کاملاً سالم داشته باشید؟</p>
        <p className="sub-title"> خرید کنید</p>
      </div>

      <div className="second-col">
        <div className="second-col section1">
          <p className="title"> رز و درخشش</p>
          <p className="sub-title"> خرید کنید</p>
        </div>

        <div className="second-col section2">
          <p className="title">ناب ترین رایحه ها</p>
          <p className="sub-title"> خرید کنید</p>
        </div>
      </div>

      <div className="third-col">
        <p className="title"> با طعم ویتامین سی</p>
        <p className="description">
          ساخته شده با آنتی اکسیدان های طبیعی، لوسیون های ما پوستی شفاف و سالم
          را برایتان به ارمغان می آورند{" "}
        </p>
        <p className="sub-title"> خرید کنید</p>
      </div>
    </div>
  );
}

export default FeaturedCategories;
