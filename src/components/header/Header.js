import styles from "./header.module.scss";
import businessMan from "assets/images/business_person.png";
const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <h1>Go digital with us</h1>
        <p className="desc text-white">
          We have designed hundreds of websites and helped improve their online
          performance through SEO, SEM and Social Media Marketing
        </p>
        <button className="">See Portofolio</button>
      </div>
      <img src={businessMan} alt="business man" />
    </header>
  );
};

export default Header;
