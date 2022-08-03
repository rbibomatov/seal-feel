import backgroundProfile from "./../background_profile.jpg";

const Profile = () => {
  return (
    <div className="content">
      <img
        className="backgroundProfile"
        src={backgroundProfile}
        alt="Фон профиля"
      />
      <div>Ава + описание</div>
      <div>
        My posts
        <div>
          new posts
          <div>Post1</div>
          <div>Post2</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
