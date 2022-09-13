import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { login } from "../../../redux/auth.reducer";

const LoginForm = (props) => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(login(data.email, data.password, data.rememberMe));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input
          type="email"
          {...register("email", {
            required: true,
          })}
          placeholder="email"
        />
      </div>
      <div>
        <input
          type="password"
          {...register("password", {
            required: true,
          })}
          autocomplete="on"
          placeholder="Password"
        />
      </div>
      <div>
        <input type="checkbox" {...register("rememberMe")} /> Запомнить меня
      </div>
      <div>
        <button type="submit">Login</button>
      </div>
    </form>
  );
};

export default LoginForm;
