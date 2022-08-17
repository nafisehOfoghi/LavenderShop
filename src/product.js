import { Card } from 'primereact/card';
import {Button} from 'primereact/button'
import {Image} from 'primereact/image'
import './Css/style.scss'

function Product(props){


    let pic="http://localhost:3003/products/getImage/"+props.data['pic']

    const header=(
        <img src={pic} style={{width:"13rem",height:"12rem"}} />
    )

    const footer=(
        <Button label="اضافه به سبد خرید"/>
    )

    return (
        <>
                
                <Card  header={header} footer={footer} style={{width:"13rem",height:"24rem",marginLeft:"2rem",marginTop:"1rem",fontFamily:"BNazanin",fontSize:"20px"}}>
                    <div alt="rtl" align="right">نام:{props.data['name']}</div>
                    <div alt="rtl" align="right">قیمت:{props.data['price']} تومان</div>
                </Card>
           
       
        </>
    )
}

export default Product;