import { getAuthUserData } from "./auth.reducer";

const SET_INITIALIZED = "SET_INITIALIZED";

let initialState = {
  initialized: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INITIALIZED:
      return {
        ...state,
        initialized: true,
      };

    default:
      return state;
  }
};

export const initialize = () => {
  return { type: SET_INITIALIZED };
};

export const initializeApp = () => (dispatch) => {
  let dispatchResult = dispatch(getAuthUserData());

  dispatchResult.then(() => {
    dispatch(initialize());
  });
};

export default appReducer;
