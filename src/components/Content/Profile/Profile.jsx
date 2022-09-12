import { compose } from "redux";
import withAuthRedirect from "../../../hoc/withAuthRedirect";
import { connect } from "react-redux";
import {
  getUserData,
  updateStatus,
  saveAvatar,
} from "../../../redux/profile.reducer";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";

const Profile = (props) => {
  const { userId } = useParams();

  useEffect(() => {
    props.getUserData(userId);
  }, [userId]);

  return (
    <div>
      <ProfileInfo {...props} isOnwer={props.currentUserId === userId} />
      <MyPosts currentUserLogin={props.currentUserLogin} />
    </div>
  );
};

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    currentUserId: state.auth.currentUser.id,
    currentUserLogin: state.auth.currentUser.login,
  };
};

export default compose(
  connect(mapStateToProps, { getUserData, updateStatus, saveAvatar }),
  withAuthRedirect
)(Profile);
