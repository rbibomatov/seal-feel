import styles from "./Post.module.css";
import defaultAvatar from "./../../../../../images/Common/DefaultUserAvatar.png";

const Post = (props) => {
  return (
    <div className={styles.post}>
      <img className={styles.userAvatar} src={defaultAvatar} alt="" />
      <div className={styles.postText}>
        <div className={styles.textAuthor}>Диана Мирошкина</div>
        <div className={styles.textMessage}>{props.message}</div>
        <div className={styles.postTime}>
          {props.createTime.toTimeString().slice(0, 5)}
        </div>
      </div>
    </div>
  );
};

export default Post;
