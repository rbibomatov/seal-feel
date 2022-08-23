import styles from "./Users.module.css";
import User from "./User/User";
import defaultAvatar from "./../../../images/Common/DefaultUserAvatar.png";

const Users = (props) => {
  let pages = [];
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  for (let i = 1; i <= 5; i++) {
    pages.push(i);
  }

  let usersElements = props.users.map((user, index) => {
    let userAvatar;
    if (user.photos?.large) {
      userAvatar = user.photos.large;
    } else {
      userAvatar = defaultAvatar;
    }

    return (
      <User
        id={user.id}
        // С учетом отсутствия в API фото - вместо одинаковой для всех заглушки используется массив из 10 аватарок
        photo={userAvatar}
        name={user.name}
        status={user.status}
        followed={user.followed}
        followUser={props.followUser}
        unfollowUser={props.unfollowUser}
      />
    );
  });

  return (
    <div>
      <div className={styles.pagePanel}>
        {pages.map((page) => {
          return (
            <span
              className={
                styles.page +
                (props.currentPage === page ? " " + styles.currentPage : "")
              }
              onClick={() => props.onClickPage(page)}
            >
              {page}
            </span>
          );
        })}
      </div>
      {usersElements}
    </div>
  );
};

export default Users;
