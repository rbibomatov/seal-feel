import "./App.css";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { initializeApp } from "./redux/app.reducer";
import LoginPage from "./components/LoginPage/LoginPage.jsx";
import Header from "./components/Header/Header.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import Preloader from "./components/Common/Preloader/Preloader";

const Profile = React.lazy(() =>
  import("./components/Content/Profile/Profile")
);
const Users = React.lazy(() => import("./components/Content/Users/Users"));
const Messages = React.lazy(() =>
  import("./components/Content/Messages/Messages.jsx")
);

const App = () => {
  const initialized = useSelector((state) => state.app.initialized);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeApp());
  }, []);

  if (initialized) {
    return (
      <div className="app-wrapper">
        <Header />
        <NavBar />
        <div className="app-wrapper-content">
          <React.Suspense fallback={<Preloader />}>
            <Routes>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/profile/:userId" element={<Profile />} />
              <Route path="/messages/*" element={<Messages />} />
              <Route path="/users/*" element={<Users />} />
            </Routes>
          </React.Suspense>
        </div>
      </div>
    );
  } else {
    return <Preloader absolutePosition={true} />;
  }
};

export default App;
