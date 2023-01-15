import styles from "./aboutUs.module.scss";
import arrowRight from "../../assets/icons/Arrow.png";
const AboutUs = () => {
  return (
    <div className={styles.main}>
      <div className={styles.mainContent}>
        <h2 className={styles.title}>We are experienced</h2>
        <p className="desc text-white">
          We have been around for a long time since 2010, thousands of products
          have been created, we are always here to provide new innovations for
          you
        </p>
      </div>
      <img src={arrowRight} alt="arrow right" />
    </div>
  );
};

export default AboutUs;
