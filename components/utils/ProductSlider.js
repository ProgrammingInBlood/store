import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import ProductBox from "./ProductBox";

function Slider() {
  const fadeImages = ["/product-1.jpeg", "/product-1.jpeg", "/product-1.jpeg"];
  const properties = {
    duration: 2000,
    slidesToShow: 5,
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
