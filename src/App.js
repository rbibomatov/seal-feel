import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import ProfileContainer from "./components/Content/Profile/ProfileContainer";
import DialogsContainer from "./components/Content/Dialogs/DialogsContainer.jsx";
import UsersContainer from "./components/Content/Users/UsersContainer";

function App(props) {
  return (
    <div className="app-wrapper">
      <Header />
      <NavBar />
      <div className="app-wrapper-content">
        <Routes>
          <Route path="/profile/" element={<ProfileContainer />} />
          <Route path="/profile/:userId" element={<ProfileContainer />} />
          <Route path="/messages/*" element={<DialogsContainer />} />
          <Route path="/users/*" element={<UsersContainer />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
