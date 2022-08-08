import messageClasses from "./Message.module.css";

const Message = (props) => {
  return <div className={messageClasses.message}>{props.message}</div>;
};

export default Message;
