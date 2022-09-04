import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { initializeApp } from "./redux/app.reducer";
import LoginPage from "./components/LoginPage/LoginPage.jsx";
import HeaderContainer from "./components/Header/HeaderContainer.jsx";
import NavBarContainer from "./components/NavBar/NavBarContainer.jsx";
import ProfileContainer from "./components/Content/Profile/ProfileContainer";
import MessagesContainer from "./components/Content/Messages/MessagesContainer.jsx";
import UsersContainer from "./components/Content/Users/UsersContainer";
import "./App.css";
import Preloader from "./components/Common/Preloader/Preloader";

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (this.props.initialized) {
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
    } else {
      return <Preloader absolutePosition={true} />;
    }
  }
}

let mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized,
    isAuth: state.auth.isAuth,
  };
};

export default compose(
  connect(mapStateToProps, {
    initializeApp,
  })
)(App);
