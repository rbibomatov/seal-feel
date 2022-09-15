import { compose } from "redux";
import withAuthRedirect from "../../../hoc/withAuthRedirect";
import { connect } from "react-redux";
import {
  setPage,
  getUsers,
  followUser,
  unfollowUser,
} from "../../../redux/users.reducer";
import { addDialog } from "../../../redux/messages.reducer";
import { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import Preloader from "../../Common/Preloader/Preloader";
import defaultPhoto from "./../../../images/Common/DefaultUserPhoto.png";
import PagesPanel from "./PagesPanel/PagesPanel";
import User from "./User/User";

const Users = (props) => {
  const usersPage = props.usersPage;

  useEffect(() => {
    props.getUsers(usersPage.currentPage, usersPage.pageSize);
  }, []);

  if (!usersPage.usersInProgress) {
    const usersElements = usersPage.users.map((user) => {
      return (
        <User
          key={uuidv4()}
          id={user.id}
          photo={user.photos.large ? user.photos.large : defaultPhoto}
          name={user.name}
          status={user.status}
          followed={user.followed}
          {...props}
        />
      );
    });

    return (
      <div>
        <PagesPanel {...props} />
        {usersElements}
      </div>
    );
  } else {
    return <Preloader />;
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
    addDialog,
  }),
  withAuthRedirect
)(Users);
