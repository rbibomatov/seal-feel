import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { login } from "../../redux/auth.reducer";
import { Navigate } from "react-router-dom";

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

const LoginPage = (props) => {
  if (props.isAuth) {
    return <Navigate to={"/profile/" + props.userId} />;
  } else {
    return (
      <div>
        <h1>Login</h1>
        <LoginForm login={login} />
      </div>
    );
  }
};

let mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    userId: state.auth.id,
  };
};

export default connect(mapStateToProps)(LoginPage);
