import { getProfileAPI, getStatusAPI, updateStatusAPI } from "../api/api";

const ADD_POST = "ADD_POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_USER_STATUS = "SET_USER_STATUS";

let initialState = {
  profile: null,
  posts: [],
  status: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: state.posts.length,
        message: action.newPostText,
        createTime: new Date(),
      };

      return {
        ...state,
        posts: [...state.posts, newPost],
      };

    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile,
      };
    case SET_USER_STATUS:
      return {
        ...state,
        status: action.status,
      };
    default:
      return state;
  }
};

export const addPost = (newPostText) => {
  return { type: ADD_POST, newPostText };
};
export const setUserProfile = (profile) => {
  return { type: SET_USER_PROFILE, profile };
};
export const setUserStatus = (status) => {
  return { type: SET_USER_STATUS, status };
};

export const getUserProfile = (userId) => (dispatch) => {
  getProfileAPI(userId).then((profileData) => {
    dispatch(setUserProfile(profileData));
  });
};

export const getUserStatus = (userId) => (dispatch) => {
  getStatusAPI(userId).then((statusData) => {
    dispatch(setUserStatus(statusData.data));
  });
};

export const updateUserStatus = (userStatus) => (dispatch) => {
  updateStatusAPI(userStatus).then((statusData) => {
    if (statusData.resultCode === 0) {
      dispatch(setUserStatus(userStatus));
    }
  });
};

export default profileReducer;
