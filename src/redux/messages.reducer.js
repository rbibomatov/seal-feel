const ADD_MESSAGE = "ADD_MESSAGE";
const UPDATE_MESSAGE_TEXT = "UPDATE_MESSAGE_TEXT";

let initialState = {
  dialogs: [
    { id: 1, name: "Диана" },
    { id: 2, name: "Кристина" },
    { id: 3, name: "Даня" },
    { id: 4, name: "Дианазавр" },
    { id: 5, name: "Ди" },
    { id: 6, name: "Даша" },
  ],
  messages: [
    { id: 1, message: "Халло" },
    { id: 2, message: "Хаю а ю" },
    { id: 3, message: "Нормес" },
  ],
  newMessageText: "",
};

const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let newMessage = {
        id: state.messages.length,
        message: state.newMessageText,
      };

      return {
        ...state,
        messages: [...state.messages, newMessage],
        newMessageText: "",
      };

    case UPDATE_MESSAGE_TEXT:
      return {
        ...state,
        newMessageText: action.newText,
      };

    default:
      return state;
  }
};

export const addMessageAC = () => {
  return { type: ADD_MESSAGE };
};
export const updateMessageTextAC = (text) => {
  return { type: UPDATE_MESSAGE_TEXT, newText: text };
};

export default messagesReducer;
