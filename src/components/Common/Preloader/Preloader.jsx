import styles from "./Preloader.module.css";
import preloader from "./../../../images/Common/Preloader.gif";

const Preloader = (props) => {
  return (
    <div
      className={
        props.absolutePosition
          ? styles.preloaderAbsolute
          : styles.preloaderRelative
      }
    >
      <img src={preloader} alt="" />
    </div>
  );
};

export default Preloader;
