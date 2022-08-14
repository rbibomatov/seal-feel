const UPDATE_POST_TEXT = "UPDATE_POST_TEXT";
const ADD_POST = "ADD_POST";

let initialState = {
  posts: [],
  newPostText: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_POST_TEXT:
      state.newPostText = action.newText;
      return { ...state };
    case ADD_POST:
      let newPost = {
        id: state.posts.length,
        message: state.newPostText,
        likesCount: 0,
        dislikeCount: 0,
      };

      state.posts.push(newPost);
      state.newPostText = "";
      return { ...state };
    default:
      return { ...state };
  }
};

export const updatePostTextActionCreator = (text) => {
  return { type: "UPDATE_POST_TEXT", newText: text };
};
export const addPostActionCreator = () => {
  return { type: "ADD_POST" };
};

export default profileReducer;
