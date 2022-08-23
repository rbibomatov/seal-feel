import { addPostAC, updatePostTextAC } from "../../../../redux/profile.reducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage,
  };
};

const MyPostsContainer = connect(mapStateToProps, {
  addPost: addPostAC,
  updatePostText: updatePostTextAC,
})(MyPosts);

export default MyPostsContainer;
