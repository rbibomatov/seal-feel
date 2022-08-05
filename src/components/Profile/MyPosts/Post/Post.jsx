import postClasses from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={postClasses.item}>
      <img
        src="https://farm1.staticflickr.com/339/31250538794_431a1868ea_o.jpg"
        alt=""
      />
      {props.message}
      <div>
        <span>like </span>
        <span>dislike</span>
      </div>
    </div>
  );
};

export default Post;
