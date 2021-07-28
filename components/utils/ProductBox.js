import styles from "./styles/ProductBox.module.scss";

import Image from "next/image";

function ProductBox({ name, src, price }) {
  return (
    <div className={styles.container}>
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
  );
}

export default ProductBox;
