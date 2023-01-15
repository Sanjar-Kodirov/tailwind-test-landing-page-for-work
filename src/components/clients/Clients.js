import styles from "./client.module.scss";
import microsoft from "assets/icons/microsoft.png";
import google from "assets/icons/google.png";
import amazon from "assets/icons/amazon.png";
const Clients = () => {
  return (
    <div>
      <div className={styles.main}>
        <div className={styles.mainContent}>
          <h2 className={styles.title}>Client</h2>
          <p className="desc text-warna-teks mb-14">
            Using Our Experience To Make Your Digital Experience Brighter
          </p>
        </div>
        <div className={styles.clients}>
          <img src={microsoft} alt="Group 1" border="0" />
          <img src={google} alt="Group 1" border="0" />
          <img src={amazon} alt="Group 1" border="0" />
        </div>
      </div>
    </div>
  );
};

export default Clients;
