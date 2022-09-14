import { authAPI, profileAPI } from "../api/api";
import defaultAvatar from "./../images/Common/DefaultUserAvatar.png";

const GET_CAPTCHA_URL = "auth/GET_CAPTCHA_URL";
const SET_CURRENT_USER_DATA = "auth/SET_CURRENT_USER_DATA";
const SET_CURRENT_USER_PHOTO = "auth/SET_USER_DATA";
const DELETE_CURRENT_USER_DATA = "auth/DELETE_USER_DATA";

let initialState = {
  isFetching: false,
  isAuth: false,
  captchaURL: "",
  currentUser: {
    id: null,
    email: null,
    login: null,
    photo: defaultAvatar,
  },
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CAPTCHA_URL:
      return {
        ...state,
        captchaURL: action.captchaURL,
      };
    case SET_CURRENT_USER_DATA:
      return {
        ...state,
        isAuth: true,
        currentUser: {
          ...action.userData,
        },
      };
    case SET_CURRENT_USER_PHOTO:
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          photo: action.photo,
        },
      };
    case DELETE_CURRENT_USER_DATA:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export const getCaptchaURL = (captchaURL) => {
  return { type: GET_CAPTCHA_URL, captchaURL };
};
export const setCurrentUserData = (id, email, login, photo) => {
  return { type: SET_CURRENT_USER_DATA, userData: { id, email, login, photo } };
};
export const setCurrentUserPhotoAC = (photo) => {
  return { type: SET_CURRENT_USER_PHOTO, photo };
};
export const deleteCurrentUserData = () => {
  return { type: DELETE_CURRENT_USER_DATA };
};

export const login = (email, password, rememberMe) => async (dispatch) => {
  const authData = await authAPI.login(email, password, rememberMe);

  if (authData.resultCode === 0) {
    dispatch(getAuthUserData());
  } else if (authData.resultCode === 10) {
    dispatch(getCaptcha());
  } else {
    ////
  }
};

export const getCaptcha = () => async (dispatch) => {
  const captcha = await authAPI.captcha();

  dispatch(getCaptchaURL(captcha));
};

export const logout = () => async (dispatch) => {
  const authData = await authAPI.logout();

  if (authData.resultCode === 0) {
    dispatch(deleteCurrentUserData());
  }
};

export const getAuthUserData = () => async (dispatch) => {
  const authData = await authAPI.authMe();

  if (authData.resultCode === 0) {
    const { id, email, login } = authData.data;
    const stringId = String(id);

    const {
      photos: { large: photo = defaultAvatar },
    } = await profileAPI.getProfile(id);

    dispatch(setCurrentUserData(stringId, email, login, photo));
  }
};

export const setCurrentUserPhoto = (photo) => (dispatch) => {
  dispatch(setCurrentUserPhotoAC(photo));
};

export default authReducer;
