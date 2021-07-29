import Image from "next/image";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

function Slider() {
  const fadeImages = ["/banner-1.jpg", "/banner-2.jpg", "/banner-3.jpg"];
  return (
    <div className="slide-container">
      <Fade duration={3000}>
        <div className="each-fade">
          <div className="image-container" style={{ height: 200 }}>
            <Image src={fadeImages[0]} layout="fill" objectFit="cover" />
          </div>
        </div>
        <div className="each-fade">
          <div className="image-container" style={{ height: 200 }}>
            <Image src={fadeImages[1]} layout="fill" objectFit="cover" />
          </div>
        </div>
        <div className="each-fade">
          <div className="image-container" style={{ height: 200 }}>
            <Image src={fadeImages[2]} layout="fill" objectFit="cover" />
          </div>
        </div>
      </Fade>
    </div>
  );
}

export default Slider;
