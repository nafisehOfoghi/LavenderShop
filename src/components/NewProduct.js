import "../Css/NewProduct.css";
import { useState } from "react";

function NewProduct (props)
{
    const [isButtonShown, setIsButtonShown] = useState(false);
    const background = "images/"+props.background;
    const price = props.price + "   تومان";
  
    const backgroundStyle={
  
      backgroundImage: ` url("${background}")`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
  };
   

    return (

        <div>
      <div
        className="product-box-overlay"
       style={backgroundStyle}
       onMouseEnter={() => setIsButtonShown(true)}
       onMouseLeave={() =>  setIsButtonShown(false)}
      >
        
      </div>
      <div
      className="product-box"
      onMouseEnter={() =>  setIsButtonShown(true)}
      onMouseLeave={() =>  setIsButtonShown(false)}
      style={{
        transform: isButtonShown ? "translateY(-40px)" : "translateY(0px)",
        background: isButtonShown ? "#ffffff" : "transparent"
      }}
    >
      <p className="product-title">
        {props.title}
      </p>

      <p className="product-price">
        {price} 
      </p>
     

      
        <span className="product-show-more">
اضافه به سبد خرید
          <i className="pi pi-shopping-cart "></i>
        </span>
      
    </div>

    </div>
    );

    
}

export default NewProduct;