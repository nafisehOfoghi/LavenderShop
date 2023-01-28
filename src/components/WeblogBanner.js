import { useState } from "react";
import "../Css/WeblogBanner.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function WeblogBanner() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const background1 = "images/photo-1558893885-06a2e8f6ece1.jpeg";
  const background2 = "images/photo-1554057009-4bb718be3f32.jpeg";
  const background3 = "images/photo-1518145060901-fb6d403515f0.jpeg";
  const background4 = "images/photo-1562887284-eb863165ebc8.jpeg";

  const title1 = "انتخاب شنل به عنوان بهترین برند عطر سال";
  const title2 = "ارغوان، برندی جدید در محصولات آرایشی";
  const title3 = "کارخانه جدید زیبا با مساحتی حدود 20 هکتار احداث شد";
  const title4 = "با تمامی محصولات مراقبت پوستی ما آشنا شوید";

  const date1 = "یازدهم شهریور 1401";
  const date2 = "بهمن 11 1401";
  const date3 = "شهریور 11 1401";
  const date4 = "شهریور 11 1401";

  const [isHovered, setIssHovered] = useState(false);
  const [isPost1Hovered, setIsPost1Hovered] = useState(false);
  const [isPost2Hovered, setIsPost2Hovered] = useState(false);
  const [isPost3Hovered, setIsPost3Hovered] = useState(false);
  const [isPost4Hovered, setIsPost4Hovered] = useState(false);

  return (
    <div className="weblog-banner">
      <div className="posts">
        <Carousel
          responsive={responsive}
          swipeable={false}
          draggable={false}
          showDots={true}
          arrows={false}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          <div
            className="post-item"
            style={{
              backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.30), rgba(0, 0, 0, 0.30)), url("${background1}")`,
            }}
            onMouseEnter={() => setIsPost1Hovered(true)}
            onMouseLeave={() => setIsPost1Hovered(false)}
          >
            <div
              className="post-title"
              style={{
                transform: isPost1Hovered
                  ? "translateY(-80px)"
                  : "translateY(0px)",
              }}
            >
              {title1}
            </div>

            <div
              className="post-date"
              style={{
                transform: isPost1Hovered
                  ? "translateX(-250px)"
                  : "translateX(0px)",
              }}
            >
              {date1}
              <i className="pi pi-clock"></i>
            </div>
          </div>

          <div
            className="post-item"
            style={{
              backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.30), rgba(0, 0, 0, 0.30)), url("${background2}")`,
            }}
            onMouseEnter={() => setIsPost2Hovered(true)}
            onMouseLeave={() => setIsPost2Hovered(false)}
          >
            <div
              className="post-title"
              style={{
                transform: isPost2Hovered
                  ? "translateY(-80px)"
                  : "translateY(0px)",
              }}
            >
              {title2}
            </div>
            <div
              className="post-date"
              style={{
                transform: isPost2Hovered
                  ? "translateX(-250px)"
                  : "translateX(0px)",
              }}
            >
              {date2}
              <i className="pi pi-clock"></i>
            </div>
          </div>

          <div
            className="post-item"
            style={{
              backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.30), rgba(0, 0, 0, 0.30)), url("${background3}")`,
            }}
            onMouseEnter={() => setIsPost3Hovered(true)}
            onMouseLeave={() => setIsPost3Hovered(false)}
          >
            <div
              className="post-title"
              style={{
                transform: isPost3Hovered
                  ? "translateY(-80px)"
                  : "translateY(0px)",
              }}
            >
              {title3}
            </div>
            <div
              className="post-date"
              style={{
                transform: isPost3Hovered
                  ? "translateX(-250px)"
                  : "translateX(0px)",
              }}
            >
              {date3}
              <i className="pi pi-clock"></i>
            </div>
          </div>

          <div
            className="post-item"
            style={{
              backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.30), rgba(0, 0, 0, 0.30)), url("${background4}")`,
            }}
            onMouseEnter={() => setIsPost4Hovered(true)}
            onMouseLeave={() => setIsPost4Hovered(false)}
          >
            <div
              className="post-title"
              style={{
                transform: isPost4Hovered
                  ? "translateY(-80px)"
                  : "translateY(0px)",
              }}
            >
              {title4}
            </div>
            <div
              className="post-date"
              style={{
                transform: isPost4Hovered
                  ? "translateX(-250px)"
                  : "translateX(0px)",
              }}
            >
              {date4}
              <i className="pi pi-clock"></i>
            </div>
          </div>
        </Carousel>
      </div>
      <div className="info">
        <h3 className="title">اخبار و مقاله های جدید</h3>
        <p className="subtitle">
          ما با حرفه ای ترین برندها کار میکنیم و همیشه از پروژه های جدید استقبال
          می کنیم
        </p>
        <span
          className="button"
          onMouseEnter={() => setIssHovered(true)}
          onMouseLeave={() => setIssHovered(false)}
        >
          <button
            style={{
              transform: isHovered ? "translateX(-20px)" : "translateX(0px)",
            }}
          >
            مشاهده کامل اخبار
          </button>
          <i
            className="pi pi-minus"
            style={{
              transform: isHovered ? "translateX(-20px)" : "translateX(0px)",
            }}
          ></i>
        </span>
      </div>
    </div>
  );
}

export default WeblogBanner;
