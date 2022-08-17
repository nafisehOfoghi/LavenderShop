import './App.css';
import { Navigate, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import React, { Component } from 'react';
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import { Dropdown } from 'primereact/dropdown';
import { FileUpload } from 'primereact/fileupload';
import { InputTextarea } from 'primereact/inputtextarea';
import { Card } from 'primereact/card';
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';
import { Calendar } from 'primereact/calendar';
import { Button } from 'primereact/button'
import { Dialog } from 'primereact/dialog';
import { Password } from 'primereact/password';
import { Splitter, SplitterPanel } from 'primereact/splitter';
import './Css/style.scss'
import axios from 'axios';
import Product from './product'
import { Image } from 'primereact/image'



function Home() {




    const style = {
        textAlign: 'center',
        background: 'teal',
        padding: '200px 0',
        fontSize: '30px'
    };
    const properties = {
        duration: 3000,
        slidesToShow: 4,
        slidesToScroll: 3,
        autoplay: false,
        indicators: true,
    };

    const [login, setLogin] = useState(false)
    const [signup, setSignup] = useState(false)
    const [products, setProducts] = useState([]);
    const [newproduct, setNewproduct] = useState([]);
    const [flower, setFlower] = useState({});
    const [animal, setAnimal] = useState({});
    const [water, setWater] = useState({});
    const [rain, setRain] = useState({});
    let flowerPic;
    let rainPic;
    let waterPic;
    let animalPic;
    let naturePic;
    let category="مو";
    const categories = [
        {label: 'مو', value: 'HR'},
        {label: 'پوست', value: 'BS'},
        {label: 'صورت', value: 'FC'},
        {label: 'بدن', value: 'BD'}
    ];

    function setCategory(c)
    {
    category = c;
    }

  
  

    useEffect(() => {
        axios.get('http://localhost:3003/products/all').then((res) => {
            setProducts(res.data);

        })


    }, []);



    flowerPic = "http://localhost:3003/products/getImage/" + 4


    rainPic = "http://localhost:3003/products/getImage/" + 7


    waterPic = "http://localhost:3003/products/getImage/" + 15


    animalPic = "http://localhost:3003/products/getImage/" + 13

    naturePic = "http://localhost:3003/products/getImage/" + 9


    const invoiceUploadHandler = ({files}) => {
        const [file] = files;
        const fileReader = new FileReader();
        fileReader.onload = (e) => {
            uploadInvoice(e.target.result);
        };
        fileReader.readAsDataURL(file);
    };
    const orderId=1;
    const uploadInvoice = async (invoiceFile) => {
        let formData = new FormData();
        formData.append('invoiceFile', invoiceFile);
    
        const response = await fetch(`orders/${orderId}/uploadInvoiceFile`,
            {
                method: 'POST',
                body: formData
            },
        );
    };



    // const navigate=useNavigate();

    return (

        <>
            <div className="App-header" >
                <br />
                <div style={{ textAlign: "right", marginRight: "2rem" }}>
                <Button className='add_product_button' label="ثبت محصول" onClick={() => setNewproduct(true)} />
                <Dialog header="ثبت محصول جدید" visible={newproduct} style={{ width: '50vw' }} onHide={() => setNewproduct(false)}>
               
                <table className='add_product_form'>
                            
                        
                            <tr>
                                <td colSpan={2} className='one_column'>
                                <ul className="add_product_field">
                                <li className='label'><label htmlFor="product_name" className='font-face-gm'>نام محصول</label></li>
                                <li><InputText    inputid="product_name" toggleMask/></li>
                                </ul>
                                </td>
                            </tr>

                             <tr>
                                 <td  className='two_colomn'>   
                                <ul className="add_product_field">
                                <li className='label'><label htmlFor="category">دسته بندی</label></li>
                                    <li><Dropdown id="category" value={category} options={categories} onChange={(e) => setCategory(e.value)} placeholder="انتخاب کنید"/></li>
                                </ul>
                                </td>

                                <td   className='two_colomn'>
                                <ul className="add_product_field">
                                <li className='label'><label htmlFor="product_price">قیمت (تومان)</label></li>
                                    <li><InputNumber inputId="product_price" toggleMask /></li>
                                </ul>
                                </td>
                            </tr>

                            <tr>
                                <td colSpan={2} className='one_column'>
                                <ul className="add_product_field">
                                <li ><FileUpload id="product_pic" name="invoice"
                                accept="image/*"
                                customUpload={true}
                                uploadHandler={invoiceUploadHandler}
                                mode="advanced"
                                auto={true}
                                chooseLabel="تصویر محصول"/>    </li>
                                </ul>

                                </td>
                            </tr>

                            <tr>
                                <td  colSpan={2} className='one_column'>
                                <ul className="add_product_field">
                                <li className='label'><label htmlFor="description">توضیحات </label></li>
                                <li ><InputTextarea id="description" toggleMask /></li>
                                </ul>

                                </td>
                            </tr>

                            <tr>
                                <td className='one_column'>
                                <Button label="ثبت کن" />

                                </td>
                            </tr>

                        </table>  
                            
                     

                        
                    </Dialog>



                    <Button label="ورود" className="p-button-link" onClick={() => setLogin(true)} /> &nbsp;
                    <Dialog visible={login} style={{ width: '40vw' }} onHide={() => setLogin(false)}>
                        <div style={{ marginLeft: "10rem" }}>
                            <div>
                                <span className="p-float-label">
                                    <InputText id="username" />
                                    <label htmlFor="username">Username</label>
                                </span>
                            </div>
                            <div style={{ marginTop: "2rem" }}>
                                <span className="p-float-label">
                                    <Password inputId="password" toggleMask />
                                    <label htmlFor="password">Password</label>
                                </span>
                            </div>
                           
                            
                            <div style={{ marginTop: "2rem", marginLeft: "6rem" }}>
                                <Button label="Login" />
                            </div>


                        </div>

                    </Dialog>
                    <Button label="ثبت نام" onClick={() => setSignup(true)} />
                    <Dialog visible={signup} style={{ width: '50vw' }} onHide={() => setSignup(false)} />
                </div>
            </div>



            <div class="flex flex-column mt-8  ">
                <div class="flex flex-wrap h-20rem align-items-center">
                    <div style={{ border: "2px", width: "70%", margin: "auto", height: "20rem" }} >
                        <Slide {...properties}>
                            <div  >
                                <Image  src={flowerPic} imageStyle={{ width: "15rem", height: "15rem" }} />
                            </div>
                            <div >
                                <Image src={rainPic} imageStyle={{ width: "15rem", height: "15rem" }} />
                            </div>
                            <div >
                                <Image src={waterPic} imageStyle={{ width: "15rem", height: "15rem" }} />
                            </div>
                            <div >
                                <Image src={animalPic} imageStyle={{ width: "15rem", height: "15rem" }} />
                            </div>
                            <div >
                                <Image src={naturePic} imageStyle={{ width: "15rem", height: "15rem" }} />
                            </div>


                        </Slide>
                    </div>
                </div>




                <div class="flex flex-column   mt-5  justify-content-center  ">

                    <div className='flex  h-6rem justify-content-center fontStyle mt-7 '>
                        محصولات جدید
        </div>
                    <div className='flex-column align-items-center  mt-5 '>
                        <div className="flex flex-wrap align-items-center justify-content-center ">
                            {products.slice(0, 4).map(item =>
                                <Product data={item} />

                            )}
                        </div>
                        {/* <div className="flex align-items-center justify-content-center mt-3">
               {products.slice(3,6).map(item=>
                    <Product data={item}/>
                )}
            </div> */}

                    </div>
                    <div>

                        <div className="flex bg-green-100 App-footer">

                        </div>


                    </div>
                </div>

            </div>


        </>
    );
}

export default Home;
