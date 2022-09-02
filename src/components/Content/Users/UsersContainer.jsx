import React from "react";
import { compose } from "redux";
import withAuthRedirect from "../../../hoc/withAuthRedirect";
import { connect } from "react-redux";
import {
  setPage,
  getUsers,
  followUser,
  unfollowUser,
} from "../../../redux/users.reducer";
import Preloader from "../../Common/Preloader/Preloader";
import Users from "./Users";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(
      this.props.usersPage.currentPage,
      this.props.usersPage.pageSize
    );
  }

  onClickPage = (page) => {
    this.props.setPage(page);
    this.props.getUsers(page, this.props.usersPage.pageSize);
  };

  render() {
    return (
      <>
        {this.props.usersPage.usersInProgress ? (
          <Preloader />
        ) : (
          <Users {...this.props} onClickPage={this.onClickPage} />
        )}
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    usersPage: state.usersPage,
  };
};

export default compose(
  connect(mapStateToProps, {
    setPage,
    getUsers,
    followUser,
    unfollowUser,
  }),
  withAuthRedirect
)(UsersContainer);
