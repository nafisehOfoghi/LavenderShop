import { Card } from 'primereact/card';
import { Button } from 'primereact/button'
import { Image } from 'primereact/image'
import '../Css/style.scss'
import {useNavigate } from 'react-router-dom'
function Product(props) {

    const navigate=useNavigate();

    function goToCosmeticPage(e){
        let url='/product/'
        url=url+props.data['name']
        navigate(url, { state:{data:props.data}})
    }

    let pic = "http://localhost:3003/products/getImage/" + props.data['pic']

    const header = (
        <img src={pic} style={{ width: "13rem", height: "12rem" }}  />
    )

    const footer = (
        <Button label="اضافه به سبد خرید" />
    )

    return (
        <>

            {/* <Card  header={header} footer={footer} style={{width:"13rem",height:"24rem",marginLeft:"2rem"}}>
                    <div alt="rtl" align="right">نام:{props.data['name']}</div>
                    <div alt="rtl" align="right">قیمت:{props.data['price']} تومان</div>
                </Card>
            */}

            <div className="flex flex-column m-1 mb-8">
                <div className="flex">
                    <img src={pic} style={{ width: "15rem", height: "12rem" }}  onClick={goToCosmeticPage}/>
                </div>
                <div className="flex-column md:w-15rem md:h-12rem surface-100 product" dir="rtl" onClick={goToCosmeticPage}>
                    <div className="flex md:mt-5 text-right  h-3rem" > نام:{props.data['name']}</div>
                    <div className="flex " > قیمت:{props.data['price']} تومان</div>
                    <div className="flex md:mt-5 md:mr-4" > <Button label="اضافه به سبد خرید" /></div>

                </div>
            </div>

        </>
    )
}

export default Product;