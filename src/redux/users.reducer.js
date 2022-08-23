const SET_USERS = "SET_USERS";
const SET_PAGE = "SET_PAGE";
const SET_TOTAL_USER_COUNT = "SET_TOTAL_USER_COUNT";
const SET_TOOGLE_IS_FETCHING = "SET_TOOGLE_IS_FETCHING";
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";

let initialState = {
  users: [],
  currentPage: 1,
  pageSize: 5,
  totalUsersCount: 0,
  isFetching: true,
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
    case SET_TOOGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
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

export const setUsersAC = (users) => {
  return { type: SET_USERS, users };
};
export const setPageAC = (page) => {
  return { type: SET_PAGE, page };
};
export const setTotalUsersCountAC = (totalUsersCount) => {
  return { type: SET_TOTAL_USER_COUNT, totalUsersCount };
};
export const toogleIsFetchingAC = (isFetching) => {
  return { type: SET_TOOGLE_IS_FETCHING, isFetching };
};
export const followAC = (userId) => {
  return { type: FOLLOW, userId };
};
export const unfollowAC = (userId) => {
  return { type: UNFOLLOW, userId };
};

export default usersReducer;
