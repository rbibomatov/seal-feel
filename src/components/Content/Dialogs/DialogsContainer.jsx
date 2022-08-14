import {
  addMessageActionCreator,
  updateMessageTextActionCreator,
} from "../../../redux/messages.reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    messagesPage: state.messagesPage,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: (text) => {
      if (text) {
        let action = addMessageActionCreator();
        dispatch(action);
      }
    },
    updateMessageText: (text) => {
      let action = updateMessageTextActionCreator(text);
      dispatch(action);
    },
  };
};
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
