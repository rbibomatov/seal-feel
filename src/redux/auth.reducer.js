import { authMe, getProfile } from "../api/api";
import defaultAvatar from "./../images/Common/DefaultUserAvatar.png";

const SET_USER_DATA = "SET_USER_DATA";

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
    default:
      return state;
  }
};

export const setUserData = (id, email, login, avatar) => {
  return { type: SET_USER_DATA, data: { id, email, login, avatar } };
};

export const getAuthUserData = () => {
  return (dispatch) => {
    authMe().then((authData) => {
      if (authData.resultCode === 0) {
        let { id, email, login } = authData.data;
        let avatar;

        getProfile(id).then((profileData) => {
          avatar = profileData.photos.large;
          dispatch(setUserData(id, email, login, avatar));
        });
      }
    });
  };
};

export default authReducer;
