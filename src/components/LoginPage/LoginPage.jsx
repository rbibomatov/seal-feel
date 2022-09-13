import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import LoginForm from "../Forms/LoginForm/LoginForm";

const LoginPage = (props) => {
  const isAuth = useSelector((state) => state.auth.isAuth);
  const userId = useSelector((state) => state.auth.currentUser.id);

  if (isAuth) {
    return <Navigate to={"/profile/" + userId} />;
  } else {
    return (
      <div>
        <h1>Login</h1>
        <LoginForm />
      </div>
    );
  }
};

export default LoginPage;
