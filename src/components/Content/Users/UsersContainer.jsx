import React from "react";
import axios from "axios";
import Users from "./Users";
import { connect } from "react-redux";
import {
  setUsersAC,
  setPageAC,
  setTotalUsersCountAC,
  toogleIsFetchingAC,
  followAC,
  unfollowAC,
} from "../../../redux/users.reducer";
import Preloader from "../../Common/Preloader/Preloader";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.toogleIsFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        if (response.data && response.data.items) {
          this.props.toogleIsFetching(false);
          this.props.setUsers(response.data.items);
          this.props.setTotalUsersCount(response.data.totalCount);
        }
      });
  }
  onClickPage = (page) => {
    this.props.toogleIsFetching(true);
    this.props.setPage(page);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.toogleIsFetching(false);
        if (response.data && response.data.items) {
          this.props.setUsers(response.data.items);
        }
      });
  };
  render() {
    return (
      <>
        {this.props.isFetching ? (
          <Preloader />
        ) : (
          <Users
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            onClickPage={this.onClickPage}
            isFetching={this.isFetching}
            users={this.props.users}
            followUser={this.props.followUser}
            unfollowUser={this.props.unfollowUser}
          />
        )}
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
  };
};

export default connect(mapStateToProps, {
  setUsers: setUsersAC,
  setPage: setPageAC,
  setTotalUsersCount: setTotalUsersCountAC,
  toogleIsFetching: toogleIsFetchingAC,
  followUser: followAC,
  unfollowUser: unfollowAC,
})(UsersContainer);
