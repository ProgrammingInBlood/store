import { useState } from "react";
import { useEffect } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import ProductBox from "./ProductBox";

function Slider() {
  const [windowDimensions, setWindowDimensions] = useState(0);

  useEffect(() => {
    setWindowDimensions(window.innerWidth);
    function handleResize(e) {
      setWindowDimensions(e.currentTarget.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [windowDimensions]);

  let slides = 5;
  if (windowDimensions < 600) {
    slides = 2;
  } else if (windowDimensions < 1024) {
    slides = 3;
  } else if (windowDimensions < 1200) {
    slides = 4;
  }

  const fadeImages = ["/product-1.jpeg", "/product-1.jpeg", "/product-1.jpeg"];

  const properties = {
    duration: 2000,
    slidesToShow: slides,
    slidesToScroll: 3,
    autoplay: false,
    indicators: false,
    infinite: false,
  };

  return (
    <div>
      <div>
        <Slide {...properties}>
          <ProductBox
            src={fadeImages[0]}
            name="Lenovo Ideapad Slim 3i (2021) Core i5 11th Gen"
            price="49,999"
          />
          <ProductBox
            src={fadeImages[0]}
            name="Lenovo Ideapad Slim 3i (2021) Core i5 11th Gen"
            price="49,999"
          />
          <ProductBox
            src={fadeImages[0]}
            name="Lenovo Ideapad Slim 3i (2021) Core i5 11th Gen"
            price="49,999"
          />
          <ProductBox
            src={fadeImages[0]}
            name="Lenovo Ideapad Slim 3i (2021) Core i5 11th Gen"
            price="49,999"
          />
          <ProductBox
            src={fadeImages[0]}
            name="Lenovo Ideapad Slim 3i (2021) Core i5 11th Gen"
            price="49,999"
          />
          <ProductBox
            src={fadeImages[0]}
            name="Lenovo Ideapad Slim 3i (2021) Core i5 11th Gen"
            price="49,999"
          />
          <ProductBox
            src={fadeImages[0]}
            name="Lenovo Ideapad Slim 3i (2021) Core i5 11th Gen"
            price="49,999"
          />
          <ProductBox
            src={fadeImages[0]}
            name="Lenovo Ideapad Slim 3i (2021) Core i5 11th Gen"
            price="49,999"
          />
        </Slide>
      </div>
    </div>
  );
}

export default Slider;
