import { connect } from "react-redux";
import { setUserProfileAC } from "../../../redux/profile.reducer";
import Profile from "./Profile";

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
  };
};

export default connect(mapStateToProps, {
  setUserProfile: setUserProfileAC,
})(Profile);
