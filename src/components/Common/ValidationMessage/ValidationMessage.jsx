import styles from "./ValidationMessage.module.css";

const ValidationMessage = (props) => {
  return (
    <div className={styles.validationMessageWrapper}>
      {props.messageText ? (
        <span className={styles.validationMessage}>{props.messageText}</span>
      ) : null}
    </div>
  );
};

export default ValidationMessage;
