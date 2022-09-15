import styles from "./User.module.css";
import { NavLink } from "react-router-dom";

const User = (props) => {
  const usersPage = props.usersPage;

  const messageButton = (
    <NavLink className={styles.messageButtonWrapper} to={"/messages/"}>
      <button
        className={styles.userButton + " " + styles.messageButton}
        onClick={() => {
          const user = { id: props.id, name: props.name, photo: props.photo };
          props.addDialog(user);
        }}
      >
        Написать
      </button>
    </NavLink>
  );

  const showFollowButton = (followed) => {
    let buttonText,
      onClickButton,
      buttonClass = styles.userButton;

    if (followed) {
      buttonText = "Отписаться";
      buttonClass += " " + styles.unfollowButton;

      onClickButton = () => {
        props.unfollowUser(usersPage.followingInProgress, props.id);
      };
    } else {
      buttonText = "Подписаться";
      buttonClass += " " + styles.followButton;

      onClickButton = () => {
        props.followUser(props.id);
      };
    }

    return (
      <button
        className={buttonClass}
        onClick={onClickButton}
        disabled={usersPage.followingInProgress.includes(props.id)}
      >
        {buttonText}
      </button>
    );
  };

  return (
    <div className={styles.user}>
      <div className={styles.followBar}>
        <NavLink to={"/profile/" + props.id}>
          <img className={styles.userPhoto} src={props.photo} alt="" />
        </NavLink>
        {messageButton}
        {showFollowButton(props.followed)}
      </div>
      <div className={styles.userInfo}>
        <div className={styles.userName}>{props.name}</div>
        <div className={styles.userStatus}>{props.status}</div>
      </div>
    </div>
  );
};

export default User;
