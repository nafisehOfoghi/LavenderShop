import "../Css/Services.css";
import Service from "./Service";

function Services(props)
{
    
    return(

        <div className="services">

            <Service className="service1" title="ارسال رایگان" subtitle="تا نهایت 2 روز کاری" icon="pi pi-car"/>

            <Service className="service2" title="بیش از 80 برند" subtitle="به روزرسانی روزانه" icon="pi pi-star"/>

            <Service className="service3" title="ارسال به تمام نقاط دنیا" subtitle="اطلاعات بیشتر را ببینید" icon="pi pi-globe"/>

            <Service className="service4" title="پشتیبانی 24 ساعته" subtitle="مشاوره رایگان با تیم ما" icon="pi pi-phone"/>


        </div>
    );
}

export default Services;