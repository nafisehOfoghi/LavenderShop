import { ReactReduxContext } from "react-redux";
import "../Css/Banner1.css";

function Banner1(props)
{

    return(

        <div className="banner-container">

            <h3 className="title">{props.title}</h3>
            <h2 className="subtitle">{props.subtitle}</h2>

        </div>


    );




}

export default Banner1;