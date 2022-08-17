import "../App.css";
import { useState, useEffect } from "react";
import React, { Component } from "react";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
import "../Css/style.scss";
import axios from "axios";
import Product from "../components/product";
import { Image } from "primereact/image";
import MainSlider from "../components/MainSlider";
import Category from "../components/Category";
import NewProduct from "../components/NewProduct";

function Home() {
  const style = {
    textAlign: "center",
    background: "teal",
    padding: "200px 0",
    fontSize: "30px",
  };
  const properties = {
    duration: 3000,
    slidesToShow: 4,
    slidesToScroll: 3,
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

  const [login, setLogin] = useState(false);
  const [signup, setSignup] = useState(false);
  const [products, setProducts] = useState([]);
  const [newproduct, setNewproduct] = useState(false);
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
  let category = "مو";
  const categories = [
    { label: "مو", value: "HR" },
    { label: "پوست", value: "BS" },
    { label: "صورت", value: "FC" },
    { label: "بدن", value: "BD" },
  ];

  function setCategory(c) {
    category = c;
  }

  useEffect(() => {
    axios.get("http://localhost:3003/products/all").then((res) => {
      console.log("res.data", res.data);
      setProducts(res.data);
    });
  }, []);

  flowerPic = "http://localhost:3003/products/getImage/" + 10;

  rainPic = "http://localhost:3003/products/getImage/" + 12;

  waterPic = "http://localhost:3003/products/getImage/" + 6;

  animalPic = "http://localhost:3003/products/getImage/" + 7;

  // naturePic = "http://localhost:3003/products/getImage/" + 9

  const invoiceUploadHandler = ({ files }) => {
    const [file] = files;
    const fileReader = new FileReader();
    fileReader.onload = (e) => {
      uploadInvoice(e.target.result);
    };
    fileReader.readAsDataURL(file);
  };
  const orderId = 1;
  const uploadInvoice = async (invoiceFile) => {
    let formData = new FormData();
    formData.append("invoiceFile", invoiceFile);

    const response = await fetch(`orders/${orderId}/uploadInvoiceFile`, {
      method: "POST",
      body: formData,
    });
  };

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  function goToCategory() {}

  // const navigate=useNavigate();

  return (
    <div className="main-content">
      <MainSlider
        title="محصولات مراقبت از پوست"
        subtitle="برای شما و برای محیط زیست"
        link_title="همه محصولات ما را ببینید"
      />

      <div className="category-list">
        <ul className="categories">
          <li>
            <Category
              background="photo-1562887284-8ba6b7c90fd8.jpeg"
              title="مراقبتی مو"
            />
          </li>
          <li>
            <Category
              background="photo-1562887189-7c2ae6ace6dc.jpeg"
              title="مراقبتی صورت"
            />
          </li>
          <li>
            <Category
              background="photo-1562887284-db69d5836c96.jpeg"
              title="مراقبتی پوست"
            />
          </li>
          <li>
            <Category
              background="photo-1562887284-eb863165ebc8.jpeg"
              title="مراقبتی بدن"
            />
          </li>
        </ul>
      </div>

      <div className="new-product-list">
        <h2>جدیدترین محصولات</h2>
        <p>با کیفیت ترین محصولات آرایشی بهداشتی را بشناسید</p>

        <ul className="new-products">
          <li>
            <NewProduct
              background="photo-1537277033580-8792f1e42c47-600x550.jpeg"
              title="رژ لب مایع 24 ساعته - رنگ صورتی روشن"
              price="100.000"
            />
          </li>
          <li>
            <NewProduct
              background="photo-1542452255191-c85a98f2c5d1-600x550.jpeg"
              title="رژ لب بدون سرب مدادی - رنگ قرمز روشن"
              price="150.000"
            />
          </li>
          <li>
            <NewProduct
              background="photo-1530630458144-014709e10016-600x550.jpeg"
              title="لوسیون پاک کننده آرایش، مخصوص پوست خشک"
              price="190.000"
            />
          </li>
          <li>
            <NewProduct
              background="photo-1503236823255-94609f598e71-600x534.jpeg"
              title="رژ گونه پودری (دوام بالا) - رنگ صورتی روشن"
              price="200.000"
            />
          </li>
        </ul>
      </div>
      {/* 



<div class="flex flex-column mt-8  ">
                <div class="flex flex-wrap h-20rem align-items-center">
                    <div class="flex-row flex-wrap h-20rem w-9  m-auto  ">

                        {isDesktop ? (
                            <Slide {...properties}>
                                <div class="flex  md:w-15rem md:h-15rem" className="container" >
                                    <Image src={flowerPic} imageStyle={{ width: "20rem", height: "20rem" }} imageClassName="image" onClick={goToCategory} />
                                    <div className="middle">
                                        <div className="text"> مو</div>
                                    </div>
                                </div>
                                <div class="flex  w-15rem h-15rem" className="container">
                                    <Image src={rainPic} imageStyle={{ width: "20rem", height: "20rem" }} imageClassName="image" />
                                    <div className="middle">
                                        <div className="text"> پوست</div>
                                    </div>
                                </div>
                               
                                <div class="flex  w-15rem h-15rem" className="container">
                                    <Image src={animalPic} imageStyle={{ width: "20rem", height: "20rem" }} imageClassName="image" />
                                    <div className="middle">
                                        <div className="text">عطر و ادکلن </div>
                                    </div>
                                </div>
                                <div class="flex  w-15rem h-15rem" className="container">
                                    <Image src={waterPic} imageStyle={{ width: "20rem", height: "20rem" }} imageClassName="image" />
                                    <div className="middle">
                                        <div className="text"> آرایشی</div>
                                    </div>
                                </div>


                            </Slide>) : (
                                <Slide {...smproperties}>
                                    <div class="flex  md:w-15rem md:h-15rem"  >
                                        <Image src={flowerPic} imageStyle={{ width: "15rem", height: "15rem" }} imageClassName="image" />
                                    </div>
                                    <div class="flex  w-15rem h-15rem">
                                        <Image src={rainPic} imageStyle={{ width: "15rem", height: "15rem" }} imageClassName="image" />
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
                        <div className="flex flex-wrap align-items-center  justify-content-center ">
                            {products.slice(0, 4).map(item =>
                                <Product data={item} />

                            )}
                        </div>
                       

                    </div>
                    <div>

                        <div className="flex bg-green-100 App-footer">

                        </div>


                    </div>
                </div>

            </div>

*/}
    </div>
  );
}

export default Home;
