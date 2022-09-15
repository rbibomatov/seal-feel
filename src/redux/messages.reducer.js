const ADD_DIALOG = "messages/ADD_DIALOG";
const ADD_MESSAGE = "messages/ADD_MESSAGE";
const SET_RECIPIENT = "messages/SET_RECIPIENT";

let initialState = {
  activeRecipientId: "",
  dialogs: [],
  messages: [],
};

const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_DIALOG:
      const userId = String(action.user.id);

      if (!state.dialogs.find((element) => element.id === userId)) {
        const newDialog = {
          id: userId,
          name: action.user.name,
          photo: action.user.photo,
        };

        return {
          ...state,
          activeRecipientId: String(action.user.id),
          dialogs: [newDialog, ...state.dialogs],
        };
      } else {
        return {
          ...state,
          activeRecipientId: String(action.user.id),
        };
      }
    case ADD_MESSAGE:
      const newMessage = {
        recipientId: action.recipientId,
        senderId: action.senderUser.id,
        senderName: action.senderUser.login,
        senderPhoto: action.senderUser.photo,
        message: action.newMessageText,
        createTime: new Date(),
      };

      return {
        ...state,
        messages: [...state.messages, newMessage],
      };
    case SET_RECIPIENT:
      return {
        ...state,
        activeRecipientId: String(action.recipientId),
      };
    default:
      return state;
  }
};

export const addDialog = (user) => {
  return { type: ADD_DIALOG, user };
};

export const addMessage = (newMessageText, senderUser, recipientId) => {
  return { type: ADD_MESSAGE, newMessageText, senderUser, recipientId };
};

export const setRecipient = (recipientId) => {
  return { type: SET_RECIPIENT, recipientId };
};

export default messagesReducer;
