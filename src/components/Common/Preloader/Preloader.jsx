import styles from "./Preloader.module.css";
import preloader from "./../../../images/Common/Preloader.gif";

const Preloader = () => {
  return (
    <div className={styles.preloader}>
      <img src={preloader} alt="" />
    </div>
  );
};

export default Preloader;
