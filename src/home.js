import './App.css';
import { Navigate, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import React, { Component } from 'react';
import { InputText } from 'primereact/inputtext';
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
import MediaQuery from 'react-responsive'


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
        slidesToScroll: 4,
        autoplay: false,
        indicators: true,
    };
    const smproperties = {
        duration: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
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
    const [isDesktop, setDesktop] = useState(window.innerWidth >= 1024);
    let flowerPic;
    let rainPic;
    let waterPic;
    let animalPic;
    let naturePic;

    const updateMedia = () => {
        setDesktop(window.innerWidth > 1450);
    };

    useEffect(() => {
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
    });


    useEffect(() => {
        axios.get('http://localhost:3003/products/all').then((res) => {
            setProducts(res.data);

        })


    }, []);



    flowerPic = "http://localhost:3003/products/getImage/" + 4


    rainPic = "http://localhost:3003/products/getImage/" + 9


    waterPic = "http://localhost:3003/products/getImage/" + 7


    animalPic = "http://localhost:3003/products/getImage/" + 15

    naturePic = "http://localhost:3003/products/getImage/" + 13


    function goToCategory(){

    }




    // const navigate=useNavigate();

    return (

        <>
            <div className="App-header" >
                <br />
                <div style={{ textAlign: "right", marginRight: "2rem" }}>
                    <Button label="Log in" className="p-button-link" onClick={() => setLogin(true)} /> &nbsp;
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
                    <Button label="Sign up" onClick={() => setSignup(true)} />
                    <Dialog visible={signup} style={{ width: '50vw' }} onHide={() => setSignup(false)} />
                </div>
            </div>



            <div class="flex flex-column mt-8  ">
                <div class="flex flex-wrap h-20rem align-items-center">
                    {/* <div style={{ border: "2px", width: "70%", margin: "auto", height: "20rem" }} > */}
                    <div class="flex-row flex-wrap h-20rem w-8  m-auto ">

                        {isDesktop ? (
                            <Slide {...properties}>
                                <div class="flex  md:w-15rem md:h-15rem" className="container" >
                                    <Image src={flowerPic} imageStyle={{ width: "15rem", height: "15rem" }} imageClassName="image" onClick={goToCategory}/>
                                    <div className="middle">
                                        <div className="text"> گلها</div>
                                    </div>
                                </div>
                                <div class="flex  w-15rem h-15rem" className="container">
                                    <Image src={rainPic} imageStyle={{ width: "15rem", height: "15rem" }} imageClassName="image" />
                                    <div className="middle">
                                        <div className="text"> باران</div>
                                    </div>
                                </div>
                                {/* <div class="flex  w-15rem h-15rem" className="container" >
                                    <Image src={waterPic} imageStyle={{ width: "15rem", height: "15rem" }} imageClassName="image" />
                                    <div className="middle">
                                        <div className="text"> حیوانات</div>
                                    </div>
                                </div> */}
                                <div class="flex  w-15rem h-15rem" className="container">
                                    <Image src={animalPic} imageStyle={{ width: "15rem", height: "15rem" }} imageClassName="image"/>
                                    <div className="middle">
                                        <div className="text"> حیوانات</div>
                                    </div>
                                </div>
                                <div class="flex  w-15rem h-15rem" className="container">
                                    <Image src={naturePic} imageStyle={{ width: "15rem", height: "15rem" }} imageClassName="image"/>
                                    <div className="middle">
                                        <div className="text"> طبیعت</div>
                                    </div>
                                </div>


                            </Slide>) : (
                                <Slide {...smproperties}>
                                    <div class="flex  md:w-15rem md:h-15rem"  >
                                        <Image src={flowerPic} imageStyle={{ width: "15rem", height: "15rem" }} imageClassName="image" />
                                    </div>
                                    <div class="flex  w-15rem h-15rem">
                                        <Image src={rainPic} imageStyle={{ width: "15rem", height: "15rem" }} imageClassName="image"/>
                                    </div>
                                    <div class="flex  w-15rem h-15rem" >
                                        <Image src={waterPic} imageStyle={{ width: "15rem", height: "15rem" }} imageClassName="image" />
                                    </div>
                                    <div class="flex  w-15rem h-15rem">
                                        <Image src={animalPic} imageStyle={{ width: "15rem", height: "15rem" }} imageClassName="image" />
                                    </div>
                                    <div class="flex  w-15rem h-15rem" >
                                        <Image src={naturePic} imageStyle={{ width: "15rem", height: "15rem" }} imageClassName="image" />
                                    </div>


                                </Slide>)}
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

                        <div className="flex bg-green-100 App-footer mt-5">

                        </div>


                    </div>
                </div>

            </div>


        </>
    );
}

export default Home;
