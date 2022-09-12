import styles from "./Users.module.css";
import { compose } from "redux";
import withAuthRedirect from "../../../hoc/withAuthRedirect";
import { connect } from "react-redux";
import {
  setPage,
  getUsers,
  followUser,
  unfollowUser,
} from "../../../redux/users.reducer";
import { useEffect } from "react";
import Preloader from "../../Common/Preloader/Preloader";
import defaultAvatar from "./../../../images/Common/DefaultUserAvatar.png";
import User from "./User/User";

const Users = (props) => {
  const usersPage = props.usersPage;

  useEffect(() => {
    props.getUsers(usersPage.currentPage, usersPage.pageSize);
  }, []);

  if (usersPage.usersInProgress) {
    return <Preloader />;
  } else {
    let pages = [];
    let pagesCount = Math.ceil(usersPage.totalUsersCount / usersPage.pageSize);

    let currentPage = usersPage.currentPage;
    let startPage = currentPage - 4 < 1 ? 1 : currentPage - 4;
    let endPage = currentPage + 4 < pagesCount ? currentPage + 4 : pagesCount;

    for (let i = startPage; i <= endPage; i++) {
      if (i === startPage && startPage - 1 > 0) {
        pages.push(1, "«");
      }

      pages.push(i);

      if (i === endPage && endPage + 1 <= pagesCount) {
        pages.push("»", pagesCount);
      }
    }

    let usersElements = usersPage.users.map((user) => {
      return (
        <User
          id={user.id}
          photo={user.photos.large ? user.photos.large : defaultAvatar}
          name={user.name}
          status={user.status}
          followed={user.followed}
          followUser={props.followUser}
          unfollowUser={props.unfollowUser}
          followingInProgress={usersPage.followingInProgress}
        />
      );
    });

    let pagesElements = pages.map((page) => {
      return (
        <span
          className={
            styles.page + (currentPage === page ? " " + styles.currentPage : "")
          }
          onClick={() => {
            let switchedPage = page;

            if (page === "«") {
              switchedPage = currentPage - 5;
            } else if (page === "»") {
              switchedPage = currentPage + 5;
            }

            props.setPage(switchedPage);
            props.getUsers(switchedPage, usersPage.pageSize);
          }}
        >
          {page}
        </span>
      );
    });

    return (
      <div>
        <div className={styles.pagePanel}>{pagesElements}</div>
        {usersElements}
      </div>
    );
  }
};

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
)(Users);
