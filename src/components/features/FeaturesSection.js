import styles from "./features.module.scss";

import featuresImages from "assets/images/featuresImages.png";
import ellipce from "assets/icons/Ellipse.png";
import dotGrid from "assets/icons/dotGrid.png";
import FeaturesCardContainer from "./featuresCardContainer/FeaturesCardContainer";
const FeaturesSection = () => {
  return (
    <div className={styles.featuresSection}>
      <div className={styles.featuresImages}>
        <img src={featuresImages} alt="some" />
        <img src={ellipce} alt="some" />
        <img src={dotGrid} alt="some" />
      </div>
      <div className={styles.featuresContent}>
        <p className="desc text-warna-teks mb-4">Who We Help</p>
        <h2 className="mb-4">Specific challenges require specific solutions</h2>
        <p className="desc text-warna-teks-2 mb-20">
          Some of the industries our digital agency specialises in
        </p>

        <FeaturesCardContainer />
      </div>
    </div>
  );
};

export default FeaturesSection;
