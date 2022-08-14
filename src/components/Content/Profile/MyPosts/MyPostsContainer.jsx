import {
  addPostActionCreator,
  updatePostTextActionCreator,
} from "../../../../redux/profile.reducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: (text) => {
      if (text) {
        let action = addPostActionCreator();
        dispatch(action);
      }
    },
    updatePostText: (text) => {
      let action = updatePostTextActionCreator(text);
      dispatch(action);
    },
  };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
