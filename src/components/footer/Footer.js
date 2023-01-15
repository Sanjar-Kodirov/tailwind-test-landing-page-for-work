import styles from "./footer.module.scss";
import logo from "assets/icons/DummyLogo.png";
import boxGrayFooter from "assets/icons/boxGrayFooter.png";
import DotGridCircle from "assets/icons/DotGridCircle.png";
import DotGridFooter from "assets/icons/DotGridFooter.png";
const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.logoContent}>
          <p>
            <img src={logo} alt="some" />
          </p>
          <p>Go digital with us</p>
          <p>50 Raya Building</p>
          <p> Call us: 123-456-678</p>
        </div>
        <div className={styles.asideLinks}>
          <ul>
            <li>Company</li>
            <li>About Us</li>
            <li>Blog</li>
            <li>Gallery</li>
            <li>Contact</li>
          </ul>
          <ul>
            <li>Social Media</li>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Twitter</li>
          </ul>
          <div className={styles.imagesContainer}>
            <img src={boxGrayFooter} alt="some" />
            <img src={DotGridCircle} alt="some" />
          </div>
        </div>
      </div>
      <img className={styles.dotImage} src={DotGridFooter} alt="some" />
      <p className="desc">Copyright © 2021 Steelthemes. All Rights Reserved.</p>
    </div>
  );
};

export default Footer;
