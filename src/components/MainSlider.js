import "./MainSlider.css"
import { Button } from 'primereact/button';
 


function MainSlider(props)
{

    return(

        <div className="App-header" >
        <br />

            <ul className="slider_title">
                <li><h2>
                    {props.title}
                    </h2></li>
                <li><p>
                    {props.subtitle}</p></li>
                <li style={{marginTop:"50px"}}><Button label={props.link_title} className="p-button-raised slider-botton" /></li>

            </ul>
        

    </div>


    );
}

export default MainSlider;