import { useState } from "react";
import "../Css/Category.css";



function Category(props) {
  const [isButtonShown, setIsButtonShown] = useState(false);
  const background = "images/"+props.background;

  const backgroundStyle={

    backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.30), rgba(0, 0, 0, 0.30)), url("${background}")`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
};
  return (
    <div
      className="category-box-overlay"
     style={backgroundStyle}
    >
      <div
        className="category-box"
        onMouseEnter={() =>  setIsButtonShown(true)}
        onMouseLeave={() =>  setIsButtonShown(false)}
      >
        <p
          className="category-title"
          style={{
            paddingTop: isButtonShown ? "25%" : "40%",
            marginBottom: isButtonShown ? "30px" : "0px"
          }}
        >
          {props.title}
        </p>

        {isButtonShown && (
          <span className="category-show-more">
            بیشتر ببینید
            <i className="pi pi-arrow-right "></i>
          </span>
        )}
      </div>
    </div>
  );
}

export default Category;
