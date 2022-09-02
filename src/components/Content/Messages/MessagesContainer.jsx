import { compose } from "redux";
import withAuthRedirect from "../../../hoc/withAuthRedirect";
import { connect } from "react-redux";
import { addMessage, updateMessageText } from "../../../redux/messages.reducer";
import Messages from "./Messages";

let mapStateToProps = (state) => {
  return {
    messagesPage: state.messagesPage,
  };
};

export default compose(
  connect(mapStateToProps, {
    addMessage,
    updateMessageText,
  }),
  withAuthRedirect
)(Messages);
