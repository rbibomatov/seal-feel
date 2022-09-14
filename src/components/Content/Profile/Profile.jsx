import { compose } from "redux";
import withAuthRedirect from "../../../hoc/withAuthRedirect";
import { connect } from "react-redux";
import {
  getUserData,
  updateStatus,
  updatePhoto,
} from "../../../redux/profile.reducer";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import Preloader from "../../Common/Preloader/Preloader";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";

const Profile = (props) => {
  const { profileId } = useParams();

  useEffect(() => {
    props.getUserData(profileId);
  }, [profileId]);

  if (!props.profilePage.profileInProgress && props.profilePage.profile) {
    return (
      <div>
        <ProfileInfo {...props} isOnwer={props.currentUserId === profileId} />
        <MyPosts
          posts={props.profilePage.posts}
          currentUserLogin={props.currentUserLogin}
          currentUserPhoto={props.currentUserPhoto}
          profileId={profileId}
        />
      </div>
    );
  } else {
    return <Preloader />;
  }
};

let mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage,
    currentUserId: state.auth.currentUser.id,
    currentUserLogin: state.auth.currentUser.login,
    currentUserPhoto: state.auth.currentUser.photo,
  };
};

export default compose(
  connect(mapStateToProps, { getUserData, updateStatus, updatePhoto }),
  withAuthRedirect
)(Profile);
