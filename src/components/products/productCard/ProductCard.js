import styles from "./productCard.module.scss";
import img1 from "assets/images/producrCardImage.png";

const ProductCard = () => {
  return (
    <div className={styles.productCard}>
      <img src={img1} alt="some" />
      <div className={styles.content}>
        <h4>PT. ABCDE</h4>
        <p className="desc mb-9 text-warna-teks-2">Web Development</p>
        <button className="btn-blue">See Details</button>
      </div>
    </div>
  );
};

export default ProductCard;
