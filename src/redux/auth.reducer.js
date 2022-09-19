import { authAPI, profileAPI } from "../api/api";
import defaultPhoto from "./../images/Common/DefaultUserPhoto.png";

const SET_CURRENT_USER_DATA = "auth/SET_CURRENT_USER_DATA";
const SET_CURRENT_USER_PHOTO = "auth/SET_USER_DATA";
const SET_INCORRECT_LOGIN = "auth/SET_INCORRECT_LOGIN";
const DELETE_CURRENT_USER_DATA = "auth/DELETE_USER_DATA";

let initialState = {
  isFetching: false,
  isAuth: false,
  incorrectLogin: false,
  currentUser: {
    id: null,
    email: null,
    login: null,
    photo: defaultPhoto,
  },
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER_DATA:
      return {
        ...state,
        isAuth: true,
        incorrectLogin: false,
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
    case SET_INCORRECT_LOGIN:
      return {
        ...state,
        incorrectLogin: true,
      };
    case DELETE_CURRENT_USER_DATA:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export const setCurrentUserData = (id, email, login, photo) => {
  return { type: SET_CURRENT_USER_DATA, userData: { id, email, login, photo } };
};
export const setCurrentUserPhotoAC = (photo) => {
  return { type: SET_CURRENT_USER_PHOTO, photo };
};
export const setIncorrectLogin = () => {
  return { type: SET_INCORRECT_LOGIN };
};
export const deleteCurrentUserData = () => {
  return { type: DELETE_CURRENT_USER_DATA };
};

export const login = (email, password, rememberMe) => async (dispatch) => {
  const authData = await authAPI.login(email, password, rememberMe);
  if (authData.resultCode === 0) {
    dispatch(getAuthUserData());
  } else if (authData.resultCode === 1) {
    dispatch(setIncorrectLogin());
  }
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
      photos: { large: photo = defaultPhoto },
    } = await profileAPI.getProfile(id);

    dispatch(setCurrentUserData(stringId, email, login, photo));
  }

  return authData.resultCode;
};

export const setCurrentUserPhoto = (photo) => (dispatch) => {
  dispatch(setCurrentUserPhotoAC(photo));
};

export default authReducer;
