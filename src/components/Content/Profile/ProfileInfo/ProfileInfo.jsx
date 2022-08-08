import profileInfoClasses from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
  let url =
    "https://www.trn-news.ru/Ru/Upload/Image/rfegf73t4rv3c64tr37egfiuyewr.jpg";

  return (
    <div>
      <img
        className={profileInfoClasses.backgroundProfile}
        src={url}
        alt="Фон профиля"
      />
      <div className={profileInfoClasses.profileDescription}>
        Ава + описание
      </div>
    </div>
  );
};

export default ProfileInfo;
