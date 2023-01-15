import styles from "./work.module.scss";
import img1 from "assets/images/work.png";
import ellipceLowTranperant from "assets/icons/EllipseLowOpacity.png";
import ellipce2 from "assets/icons/Ellipse2.png";
const Work = () => {
  return (
    <div className={styles.work}>
      <div className={styles.workContent}>
        <h2>How does our process work?</h2>
        <p className="desc text-warna-teks-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>

        <button className="btn-blue">See Details</button>
      </div>
      <div className={styles.workGallary}>
        <img className={styles.ellipce} src={ellipceLowTranperant} alt="some" />
        <img className={styles.ellipce2} src={ellipce2} alt="some" />
        <img src={img1} alt="some" />
        <img src={img1} alt="some" />
        <img src={img1} alt="some" />
        <img src={img1} alt="some" />
      </div>
    </div>
  );
};

export default Work;
