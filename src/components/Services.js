import "../Css/Services.css";
import Service from "./Service";

function Services(props)
{
    
    return(

        <div className="services">

            <Service className="service1" title="Free Delivery" subtitle="Up to 2 working days" icon="pi pi-car"/>

            <Service className="service2" title="More than 80 brands" subtitle="Daily update" icon="pi pi-star"/>

            <Service className="service3" title="World Wide Shipping" subtitle="More Information" icon="pi pi-globe"/>

            <Service className="service4" title="24 hour support" subtitle="Free consultation" icon="pi pi-phone"/>


        </div>
    );
}

export default Services;
