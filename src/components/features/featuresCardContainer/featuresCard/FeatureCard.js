import styles from "./featureCard.module.scss";

import globus from "assets/icons/net.png";
const FeatureCard = () => {
  return (
    <div className={styles.cardBody}>
      <div className={styles.cardHeader}>
        <img src={globus} alt="some" />
        <h3>Web & Mobile Apps</h3>
      </div>
      <div>
        <p className="desc text-warna-teks-2 ">
          Lorem ipsum dolor sit <br /> amet, consectetur <br /> adipiscing elit.
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;
