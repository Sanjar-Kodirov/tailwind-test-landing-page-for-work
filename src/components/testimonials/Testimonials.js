import styles from "./testimonials.module.scss";
import person from "assets/images/SomePerson.png";
const Testimonials = () => {
  return (
    <div className={styles.main}>
      {/* <div className={styles.image}> */}
      <img src={person} alt="some" />
      {/* </div> */}
      <div className={styles.content}>
        <div>
          <h2 className="mb-6">Testimonials by them</h2>
          <p className="desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. <span> -Joe Z</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
