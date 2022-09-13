import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addMessage } from "../../../redux/messages.reducer";

const AddMessageForm = (props) => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(addMessage(data.messageText));
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <textarea
        {...register("messageText", {
          required: true,
        })}
        cols="50"
        rows="5"
        placeholder="Введите свое сообщение..."
      ></textarea>
      <button type="submit">Add</button>
    </form>
  );
};

export default AddMessageForm;
