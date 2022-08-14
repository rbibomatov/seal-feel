import "./App.css";
import Header from "./components/Header/Header.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Profile from "./components/Content/Profile/Profile.jsx";
import DialogsContainer from "./components/Content/Dialogs/DialogsContainer.jsx";
import { Routes, Route } from "react-router-dom";

function App(props) {
  return (
    <div className="app-wrapper">
      <Header />
      <NavBar />
      <div className="app-wrapper-content">
        <Routes>
          <Route path="/profile/*" element={<Profile />} />
          <Route path="/messages/*" element={<DialogsContainer />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
