import styles from "./Post.module.css";
import defaultPhoto from "./../../../../../images/Common/DefaultUserPhoto.png";

const Post = (props) => {
  return (
    <div className={styles.post}>
      <img
        className={styles.userPhoto}
        src={props.currentUserPhoto || defaultPhoto}
        alt=""
      />
      <div className={styles.postText}>
        <div className={styles.textAuthor}>{props.currentUserLogin}</div>
        <div className={styles.textMessage}>{props.message}</div>
        <div className={styles.postTime}>
          {props.createTime.toTimeString().slice(0, 5)}
        </div>
      </div>
    </div>
  );
};

export default Post;
