import "../Css/Services.css";

function Service(props)
{
    return(

        <div className="service">
                <i className={props.icon}></i>
                <h3 className="title">{props.title}</h3>
                <p className="subtitle">{props.subtitle}</p>
            </div>
    );
}

export default Service;