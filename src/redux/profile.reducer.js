import { profileAPI } from "../api/api";

const SET_USER_DATA = "profile/SET_USER_DATA";
const SET_USER_STATUS = "profile/SET_USER_STATUS";
const SET_USER_AVATAR = "profile/SET_USER_AVATAR";
const ADD_POST = "profile/ADD_POST";

let initialState = {
  profile: null,
  status: "",
  posts: [],
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        profile: action.profile,
        status: action.status,
      };
    case SET_USER_STATUS:
      return {
        ...state,
        status: action.status,
      };
    case SET_USER_AVATAR:
      return {
        ...state,
        profile: { ...action.profile, photos: action.avatar },
      };
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

    default:
      return state;
  }
};

const setUserData = (profile, status) => {
  return { type: SET_USER_DATA, profile, status };
};
const setUserStatus = (status) => {
  return { type: SET_USER_STATUS, status };
};
const setUserAvatar = (avatar) => {
  return { type: SET_USER_AVATAR, avatar };
};
export const addPost = (newPostText) => {
  return { type: ADD_POST, newPostText };
};

export const getUserData = (userId) => async (dispatch) => {
  const results = await Promise.all([
    profileAPI.getProfile(userId),
    profileAPI.getStatus(userId),
  ]);

  dispatch(setUserData(results[0], results[1]));
};

export const updateStatus = (userStatus) => async (dispatch) => {
  const statusData = await profileAPI.updateStatus(userStatus);
  if (statusData.resultCode === 0) {
    dispatch(setUserStatus(userStatus));
  }
};

export const saveAvatar = (file) => async (dispatch) => {
  const avatarData = await profileAPI.saveAvatar(file);
  if (avatarData.resultCode === 0) {
    dispatch(setUserAvatar(avatarData.data.photos));
  }
};

export default profileReducer;
