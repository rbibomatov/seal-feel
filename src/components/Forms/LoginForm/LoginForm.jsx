import styles from "./LoginForm.module.css";
import logo from "./../../../images/Content/Logo.png";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../../redux/auth.reducer";
import ValidationMessage from "../../Common/ValidationMessage/ValidationMessage";

const LoginForm = (props) => {
  const incorrectLogin = useSelector((state) => state.auth.incorrectLogin);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(login(data.email, data.password, data.rememberMe));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1 className={styles.formHeader}>Авторизация</h1>
      <img className={styles.logo} src={logo} alt="" />
      <div className={styles.formItem}>
        <b className={styles.formItemHeader}>Email:</b>
        <input
          type="email"
          {...register("email", {
            required: "Пожалуйста, заполните поле",
          })}
          placeholder="email"
        />
        <ValidationMessage messageText={errors?.email?.message} />
      </div>
      <div className={styles.formItem}>
        <b className={styles.formItemHeader}>Пароль:</b>
        <input
          type="password"
          {...register("password", {
            required: "Пожалуйста, заполните поле",
          })}
          autoComplete="on"
          placeholder="Password"
        />
        <ValidationMessage messageText={errors?.password?.message} />
      </div>
      <div className={styles.formItem}>
        <input type="checkbox" {...register("rememberMe")} /> Запомнить меня
      </div>
      <ValidationMessage
        messageText={incorrectLogin ? "Неверный логин или пароль" : null}
      />
      <div className={styles.loginButtonWrapper}>
        <button className={styles.loginButton} type="submit">
          Войти
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
