import Image from "next/image";
import Navbar from "../../components/NavBar";
import styles from "./Details.module.scss";
import { motion } from "framer-motion";

function Details() {
  const easing = [0.6, -0.05, 0.01, 0.99];

  const fadeInUp = {
    initial: {
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: easing,
      },
    },
  };
  return (
    <motion.div
      variants={fadeInUp}
      exit={{ opacity: 0 }}
      initial="initial"
      animate="animate"
    >
      <div className={styles.container}>
        <Navbar />
        <div className={styles.main}>
          <div className={styles.images}>
            <div className={styles.image}>
              <ul>
                <li className={styles.img}>
                  <Image
                    src="/product-1.jpeg"
                    width="50"
                    height="50"
                    objectFit="contain"
                  />
                </li>
                <li className={styles.img}>
                  <Image
                    src="/product-1.jpeg"
                    width="50"
                    height="50"
                    objectFit="contain"
                  />
                </li>
                <li className={styles.img}>
                  <Image
                    src="/product-1.jpeg"
                    width="50"
                    height="50"
                    objectFit="contain"
                  />
                </li>
                <li className={styles.img}>
                  <Image
                    src="/product-1.jpeg"
                    width="50"
                    height="50"
                    objectFit="contain"
                  />
                </li>
                <li className={styles.img}>
                  <Image
                    src="/product-1.jpeg"
                    width="50"
                    height="50"
                    objectFit="contain"
                  />
                </li>
              </ul>
            </div>
            <div className={styles.mainImage}>
              <Image
                src="/product-1.jpeg"
                width="500"
                height="500"
                objectFit="contain"
              />
            </div>
          </div>
          <div className={styles.details}>
            <h1>
              Lenovo Ideapad Slim 3i (2021) Core i5 11th Gen - (8 GB/512 GB
              SSD/Windows 10 Home) IdeaPad 3 15ITL6 Thin and Light Laptop (15.6
              Inch, Arctic Grey, 1.65 KG, With MS Office)
            </h1>
            <div className={styles.price}>
              <h3>₹56,990</h3>
              <del>₹89,990</del>
            </div>

            <div className={styles.highlights}>
              <h4>Product highlights</h4>
              <ul>
                <li>Supported Apps: Netflix|Disney+Hotstar|Youtube</li>
                <li>Operating System: Tizen</li>
                <li>Resolution: HD Ready 1366 x 768 Pixels</li>
                <li>Sound Output: 20 W</li>
                <li>Refresh Rate: 60 Hz</li>
              </ul>
            </div>
            <div className={styles.description}>
              <h4>Description</h4>

              <div className={styles.descriptionText}>
                Take your entertainment to the next level with this Samsung TV.
                With the Content Guide on this TV, you now have access to
                content from the top-rated TV shows. The HD picture quality, in
                combination with PurColor, will ensure that you never have a
                dull moment throughout your TV-viewing experience. Moreover,
                with the Screen Mirroring feature, you can connect your
                compatible devices and watch your favourite TV shows on the big
                screen.
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Details;
