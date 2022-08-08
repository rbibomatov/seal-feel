import "./App.css";
import Header from "./components/Header/Header.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Profile from "./components/Content/Profile/Profile.jsx";
import Dialogs from "./components/Content/Dialogs/Dialogs.jsx";
import { Routes, Route } from "react-router-dom";

function App(props) {
  let appState = props.appState;

  let profilePage = appState.profilePage;
  let messagesPage = appState.messagesPage;

  return (
    <div className="app-wrapper">
      <Header />
      <NavBar />
      <div className="app-wrapper-content">
        <Routes>
          <Route
            path="/profile/*"
            element={<Profile posts={profilePage.posts} />}
          />
          <Route
            path="/messages/*"
            element={
              <Dialogs
                dialogs={messagesPage.dialogs}
                messages={messagesPage.messages}
              />
            }
          />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
