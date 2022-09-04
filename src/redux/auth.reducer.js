import { loginAPI, logoutAPI, authMeAPI, getProfileAPI } from "../api/api";
import defaultAvatar from "./../images/Common/DefaultUserAvatar.png";

const SET_USER_DATA = "SET_USER_DATA";
const DELETE_USER_DATA = "DELETE_USER_DATA";

let initialState = {
  isFetching: false,
  isAuth: false,
  id: null,
  email: null,
  login: null,
  avatar: defaultAvatar,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
        isAuth: true,
        avatar: action.avatar ? action.avatar : defaultAvatar,
      };
    case DELETE_USER_DATA:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export const setUserData = (id, email, login, avatar) => {
  return { type: SET_USER_DATA, data: { id, email, login, avatar } };
};
export const deleteUserData = () => {
  return { type: DELETE_USER_DATA };
};

export const getAuthUserData = () => (dispatch) => {
  return authMeAPI().then((authData) => {
    if (authData.resultCode === 0) {
      let { id, email, login } = authData.data;
      getProfileAPI(id).then((profileData) => {
        dispatch(setUserData(id, email, login, profileData.photos.large));
      });
    }
  });
};

export const login = (email, password, rememberMe) => (dispatch) => {
  loginAPI(email, password, rememberMe).then((authData) => {
    if (authData.resultCode === 0) {
      dispatch(getAuthUserData());
    }
  });
};

export const logout = () => (dispatch) => {
  logoutAPI().then((authData) => {
    if (authData.resultCode === 0) {
      dispatch(deleteUserData());
    }
  });
};

export default authReducer;
