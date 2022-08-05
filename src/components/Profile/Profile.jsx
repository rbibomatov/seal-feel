import backgroundProfile from "./img/background_profile.jpg";
import profileClasses from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
  return (
    <div className={profileClasses.content}>
      <img
        className={profileClasses.backgroundProfile}
        src={backgroundProfile}
        alt="Фон профиля"
      />
      <div>Ава + описание</div>
      <MyPosts />
    </div>
  );
};

export default Profile;
