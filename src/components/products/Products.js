import styles from "./products.module.scss";
import ProductCard from "./productCard/ProductCard";
const Products = () => {
  return (
    <div className={styles.products}>
      <div className={styles.productHeader}>
        <p className="desc text-warna-teks mb-4">Our Product</p>
        <h2 className="mb-4">We’ll let our work speak for itself</h2>
        <p className="desc text-warna-teks-2">
          Ut enim ad minim veniam, quis nostrud exercitation ullamco{" "}
        </p>
      </div>

      <div className={styles.productContent}>
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default Products;
