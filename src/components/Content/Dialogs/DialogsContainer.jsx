import {
  addMessageAC,
  updateMessageTextAC,
} from "../../../redux/messages.reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    messagesPage: state.messagesPage,
  };
};

const DialogsContainer = connect(mapStateToProps, {
  sendMessage: addMessageAC,
  updateMessageText: updateMessageTextAC,
})(Dialogs);

export default DialogsContainer;
