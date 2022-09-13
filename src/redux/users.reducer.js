import { usersAPI } from "../api/api";

const SET_USERS = "users/SET_USERS";
const SET_PAGE = "users/SET_PAGE";
const SET_TOTAL_USER_COUNT = "users/SET_TOTAL_USER_COUNT";
const SET_USERS_IN_PROGRESS = "users/SET_USERS_IN_PROGRESS";
const SET_FOLLOWING_IS_PROGRESS = "users/SET_FOLLOWING_IS_PROGRESS";
const FOLLOW = "users/FOLLOW";
const UNFOLLOW = "users/UNFOLLOW";

let initialState = {
  currentPage: 1,
  pageSize: 5,
  totalUsersCount: 0,
  usersInProgress: false,
  users: [],
  followingInProgress: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        users: action.users,
      };
    case SET_PAGE:
      return {
        ...state,
        currentPage: action.page,
      };
    case SET_TOTAL_USER_COUNT:
      return {
        ...state,
        totalUsersCount: action.totalUsersCount,
      };
    case SET_USERS_IN_PROGRESS:
      return {
        ...state,
        usersInProgress: action.usersInProgress,
      };
    case SET_FOLLOWING_IS_PROGRESS:
      return {
        ...state,
        followingInProgress: [...action.followingInProgress],
      };
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: true };
          }

          return user;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: false };
          }

          return user;
        }),
      };
    default:
      return state;
  }
};

export const setUsers = (users) => {
  return { type: SET_USERS, users };
};
export const setPage = (page) => {
  return { type: SET_PAGE, page };
};
export const setTotalUsersCount = (totalUsersCount) => {
  return { type: SET_TOTAL_USER_COUNT, totalUsersCount };
};
export const toogleUsersInProgress = (usersInProgress) => {
  return { type: SET_USERS_IN_PROGRESS, usersInProgress };
};
export const toogleFollowingInProgress = (followingInProgress) => {
  return { type: SET_FOLLOWING_IS_PROGRESS, followingInProgress };
};
export const follow = (userId) => {
  return { type: FOLLOW, userId };
};
export const unfollow = (userId) => {
  return { type: UNFOLLOW, userId };
};

export const getUsers = (currentPage, pageSize) => async (dispatch) => {
  dispatch(toogleUsersInProgress(true));

  const data = await usersAPI.getUsers(currentPage, pageSize);

  dispatch(setUsers(data.items));
  dispatch(setTotalUsersCount(data.totalCount));
  dispatch(toogleUsersInProgress(false));
};

export const followUser = (userId) => async (dispatch) => {
  dispatch(toogleFollowingInProgress([userId]));

  const data = await usersAPI.followUser(userId);

  if (data.resultCode === 0) {
    dispatch(follow(userId));
    dispatch(toogleFollowingInProgress([]));
  }
};

export const unfollowUser =
  (followingInProgress, userId) => async (dispatch) => {
    dispatch(toogleFollowingInProgress([...followingInProgress, userId]));

    const data = await usersAPI.unfollowUser(userId);

    if (data.resultCode === 0) {
      dispatch(unfollow(userId));
      dispatch(
        toogleFollowingInProgress([
          [...followingInProgress].filter((id) => id !== userId),
        ])
      );
    }
  };

export default usersReducer;
