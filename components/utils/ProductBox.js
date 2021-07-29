import styles from "./styles/ProductBox.module.scss";

import Image from "next/image";

import { useRouter } from "next/router";
import { motion } from "framer-motion";
import transitions from "@material-ui/core/styles/transitions";

function ProductBox({ name, src, price }) {
  const Router = useRouter();

  function gotoProduct() {
    Router.push("/product/34");
  }

  const easing = [0.6, -0.05, 0.01, 0.99];

  const fadeInUp = {
    initial: {
      y: 60,
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
    <motion.div variants={fadeInUp}>
      <div className={styles.container} onClick={gotoProduct}>
        <Image
          src={src}
          height={200}
          width={200}
          layout="responsive"
          objectFit="contain"
        />

        <p>{name}</p>
        <h1>₹{price}</h1>
      </div>
    </motion.div>
  );
}

export default ProductBox;
