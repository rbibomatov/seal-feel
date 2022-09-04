import React from "react";
import { compose } from "redux";
import withAuthRedirect from "../../../hoc/withAuthRedirect";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { connect } from "react-redux";
import {
  getUserProfile,
  getUserStatus,
  updateUserStatus,
} from "../../../redux/profile.reducer";
import Profile from "./Profile";

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  }

  return ComponentWithRouterProp;
}

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.router.params.userId;
    this.props.getUserProfile(userId);
    this.props.getUserStatus(userId);
  }
  componentDidUpdate(prevProps) {
    let prevUserId = prevProps.router.params.userId;
    let userId = this.props.router.params.userId;
    if (prevUserId !== userId) {
      this.props.getUserProfile(userId);
      this.props.getUserStatus(userId);
    }
  }
  render() {
    return (
      <Profile {...this.props} updateStatus={this.props.updateUserStatus} />
    );
  }
}

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status,
  };
};

export default compose(
  connect(mapStateToProps, { getUserProfile, getUserStatus, updateUserStatus }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
