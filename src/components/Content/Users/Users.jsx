import styles from "./Users.module.css";
import User from "./User/User";
import defaultAvatar from "./../../../images/Common/DefaultUserAvatar.png";

const Users = (props) => {
  let userpage = props.usersPage;
  let pages = [];
  let pagesCount = Math.ceil(userpage.totalUsersCount / userpage.pageSize);

  let currentPage = userpage.currentPage;
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

  let usersElements = userpage.users.map((user) => {
    let userAvatar;
    if (user.photos?.large) {
      userAvatar = user.photos.large;
    } else {
      userAvatar = defaultAvatar;
    }

    return (
      <User
        id={user.id}
        photo={userAvatar}
        name={user.name}
        status={user.status}
        followed={user.followed}
        followUser={props.followUser}
        unfollowUser={props.unfollowUser}
        followingInProgress={userpage.followingInProgress}
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

          props.onClickPage(switchedPage);
        }}
      >
        {page}
      </span>
    );
  });

  return (
    <div>
      <div className={styles.pagePanel}>
        {/* <span>{"Пользователей: " + userpage.totalUsersCount}</span> */}
        {pagesElements}
      </div>
      {usersElements}
    </div>
  );
};

export default Users;
