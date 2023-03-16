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
import FeaturedCategories from "../components/FeauturedCategories";
import Banner from "../components/Banner1";
import Services from "../components/Services";
import WeblogBanner from "../components/WeblogBanner";

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
        title="Skin Care Products"
        subtitle="For You And For The Enviroment"
        link_title="See Our Products"
      />

      <div className="category-list">
        <ul className="categories">
          <li>
            <Category
              background="photo-1562887284-8ba6b7c90fd8.jpeg"
              title="Hair Products"
            />
          </li>
          <li>
            <Category
              background="photo-1562887189-7c2ae6ace6dc.jpeg"
              title="Hair Products"
            />
          </li>
          <li>
            <Category
              background="photo-1562887284-db69d5836c96.jpeg"
              title="Skin Care"
            />
          </li>
          <li>
            <Category
              background="photo-1562887284-eb863165ebc8.jpeg"
              title="Body Care"
            />
          </li>
        </ul>
      </div>

      <div className="new-product-list">
        <h2>Latest Products</h2>
        <p>Buy The Best Products For Your Skin</p>

        <ul className="new-products">
          <li>
            <NewProduct
              background="photo-1537277033580-8792f1e42c47-600x550.jpeg"
              title="Liquid Lipstick - Light Pink"
              price="100.000"
            />
          </li>
          <li>
            <NewProduct
              background="photo-1542452255191-c85a98f2c5d1-600x550.jpeg"
              title="Pencil Lipstick - Bright Red"
              price="150.000"
            />
          </li>
          <li>
            <NewProduct
              background="photo-1530630458144-014709e10016-600x550.jpeg"
              title="Makeup remover for dry skin"
              price="190.000"
            />
          </li>
          <li>
            <NewProduct
              background="photo-1503236823255-94609f598e71-600x534.jpeg"
              title="Powder blush - Light Pink"
              price="200.000"
            />
          </li>
        </ul>
      </div>

        <FeaturedCategories/>

        <Banner title="Instagram" subtitle="#Lavendar_Shop"/>

        <WeblogBanner/>

        <Services/>


    </div>
  );
}

export default Home;
