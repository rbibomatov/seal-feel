const ADD_MESSAGE = "messages/ADD_MESSAGE";

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
};

const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let newMessage = {
        id: state.messages.length,
        message: action.newMessageText,
      };

      return {
        ...state,
        messages: [...state.messages, newMessage],
      };

    default:
      return state;
  }
};

export const addMessage = (newMessageText) => {
  return { type: ADD_MESSAGE, newMessageText };
};

export default messagesReducer;
