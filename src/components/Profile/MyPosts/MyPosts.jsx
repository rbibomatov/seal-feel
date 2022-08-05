import myPostsClasses from "./MyPosts.module.css";
import Post from "./Post/Post.jsx";

const MyPosts = () => {
  return (
    <div>
      My posts
      <textarea name="" id="" cols="30" rows="10"></textarea>
      <button>Add</button>
      <button>Remove</button>
      <Post message="Я тюлень и мне лень!" />
      <Post message="Сегодня поел очень вкусную рыбу." />
      <Post message="Лежал. Устал." />
      <Post message="Я IT-тюлень." />
      <Post message="Ихихихихи." />
    </div>
  );
};

export default MyPosts;
