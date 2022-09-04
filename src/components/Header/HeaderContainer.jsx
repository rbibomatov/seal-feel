import React from "react";
import { compose } from "redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../redux/auth.reducer";
import Header from "./Header";

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  }

  return ComponentWithRouterProp;
}

let mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default compose(
  connect(mapStateToProps, {
    logout,
  }),
  withRouter
)(Header);
