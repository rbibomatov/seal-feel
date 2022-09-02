import { getProfile } from "../api/api";

const ADD_POST = "ADD_POST";
const UPDATE_POST_TEXT = "UPDATE_POST_TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";

let initialState = {
  profile: null,
  posts: [],
  postText: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: state.posts.length,
        message: state.postText,
        likesCount: 0,
        dislikeCount: 0,
      };

      return {
        ...state,
        posts: [...state.posts, newPost],
        postText: "",
      };

    case UPDATE_POST_TEXT:
      return {
        ...state,
        postText: action.postText,
      };

    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile,
      };
    default:
      return state;
  }
};

export const addPost = () => {
  return { type: ADD_POST };
};
export const updatePostText = (postText) => {
  return { type: UPDATE_POST_TEXT, postText };
};
export const setUserProfile = (profile) => {
  return { type: SET_USER_PROFILE, profile };
};

export const getUserProfile = (userId) => {
  return (dispatch) => {
    getProfile(userId).then((profileData) => {
      dispatch(setUserProfile(profileData));
    });
  };
};

export default profileReducer;
