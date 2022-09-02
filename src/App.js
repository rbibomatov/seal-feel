import "./App.css";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./components/Login/Login.jsx";
import HeaderContainer from "./components/Header/HeaderContainer.jsx";
import NavBarContainer from "./components/NavBar/NavBarContainer.jsx";
import ProfileContainer from "./components/Content/Profile/ProfileContainer";
import MessagesContainer from "./components/Content/Messages/MessagesContainer.jsx";
import UsersContainer from "./components/Content/Users/UsersContainer";

function App(props) {
  return (
    <div className="app-wrapper">
      <HeaderContainer />
      <NavBarContainer />
      <div className="app-wrapper-content">
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/profile/:userId" element={<ProfileContainer />} />
          <Route path="/messages/*" element={<MessagesContainer />} />
          <Route path="/users/*" element={<UsersContainer />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
