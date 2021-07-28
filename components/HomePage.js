import styles from "./styles/HomePage.module.scss";
import ProductBox from "./utils/ProductBox";
import Slider from "./utils/Slider";
import ProductSlider from "./utils/ProductSlider";

function HomePage() {
  return (
    <div className={styles.title}>
      <Slider />

      <div style={styles.productSection}>
        <h1 className={styles.productTitle}>Top Offers</h1>

        <div className={styles.products}>
          <ProductSlider />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
