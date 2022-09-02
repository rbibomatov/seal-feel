import { addPost, updatePostText } from "../../../../redux/profile.reducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage,
  };
};

const MyPostsContainer = connect(mapStateToProps, {
  addPost,
  updatePostText,
})(MyPosts);

export default MyPostsContainer;
