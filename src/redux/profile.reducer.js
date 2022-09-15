import { profileAPI } from "../api/api";
import { setCurrentUserPhoto } from "./auth.reducer";

const SET_PROFILE_IN_PROGRESS = "profile/SET_PROFILE_IN_PROGRESS";
const SET_USER_DATA = "profile/SET_USER_DATA";
const SET_USER_STATUS = "profile/SET_USER_STATUS";
const SET_USER_PHOTO = "profile/SET_USER_PHOTO";
const ADD_POST = "profile/ADD_POST";

let initialState = {
  profileInProgress: false,
  profile: null,
  status: "",
  posts: [],
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PROFILE_IN_PROGRESS:
      return {
        ...state,
        profileInProgress: action.profileInProgress,
      };
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
    case SET_USER_PHOTO:
      return {
        ...state,
        profile: { ...state.profile, photos: action.photos },
      };
    case ADD_POST:
      let newPost = {
        profileId: action.profileId,
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

const toogleProfileInProgress = (profileInProgress) => {
  return { type: SET_PROFILE_IN_PROGRESS, profileInProgress };
};
const setUserData = (profile, status) => {
  return { type: SET_USER_DATA, profile, status };
};
const setUserStatus = (status) => {
  return { type: SET_USER_STATUS, status };
};
const setUserPhoto = (photos) => {
  return { type: SET_USER_PHOTO, photos };
};
export const addPost = (newPostText, profileId) => {
  return { type: ADD_POST, newPostText, profileId };
};

export const getUserData = (userId) => async (dispatch) => {
  dispatch(toogleProfileInProgress(true));

  const results = await Promise.all([
    profileAPI.getProfile(userId),
    profileAPI.getStatus(userId),
  ]);

  dispatch(setUserData(results[0], results[1]));
  dispatch(toogleProfileInProgress(false));
};

export const updateProfile = (profile) => async (dispatch) => {
  const profileData = await profileAPI.updateProfile(profile);

  if (profileData.resultCode === 0) {
    dispatch(getUserData(profile.userId));
  }
};

export const updateStatus = (userStatus) => async (dispatch) => {
  const statusData = await profileAPI.updateStatus(userStatus);

  if (statusData.resultCode === 0) {
    dispatch(setUserStatus(userStatus));
  }
};

export const updatePhoto = (file) => async (dispatch) => {
  const photoData = await profileAPI.updatePhoto(file);

  if (photoData.resultCode === 0) {
    const photos = photoData.data.photos;
    dispatch(setUserPhoto(photos));
    dispatch(setCurrentUserPhoto(photos.large));
  }
};

export default profileReducer;
