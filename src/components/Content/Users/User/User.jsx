import styles from "./User.module.css";
import { NavLink } from "react-router-dom";

const User = (props) => {
  let followButton = (followed) => {
    let buttonText = followed ? "Отписаться" : "Подписаться";

    return (
      <button
        className={styles.followButton}
        onClick={() => {
          followed ? props.unfollowUser(props.id) : props.followUser(props.id);
        }}
      >
        {buttonText}
      </button>
    );
  };

  return (
    <div className={styles.user}>
      <div className={styles.followBar}>
        <NavLink to={"/profile/" + props.id}>
          <img className={styles.userAvatar} src={props.photo} alt="" />
        </NavLink>
        {followButton(props.followed)}
      </div>
      <div className={styles.userInfo}>
        <div className={styles.userName}>{props.name}</div>
        <div className={styles.userStatus}>{props.status}</div>
      </div>
    </div>
  );
};

export default User;
