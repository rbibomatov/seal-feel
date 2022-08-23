import axios from "axios";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const Profile = (props) => {
  let { userId } = useParams();
  if (!userId) {
    userId = 25491;
  }

  useEffect(() => {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
      .then((response) => {
        props.setUserProfile(response.data);
      });
  }, []);

  return (
    <div>
      <ProfileInfo profile={props.profile} />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
