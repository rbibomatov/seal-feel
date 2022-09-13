import styles from "./ProfileInfo.module.css";
import PhotoBar from "./ProfilePhotoBar/ProfilePhotoBar";
import StatusBar from "./ProfileStatus/ProfileStatus";
import DescriptionBlock from "./ProfileDescriptionBlock/DescriptionBlock";

const ProfileInfo = (props) => {
  const profile = props.profilePage.profile;
  const contacts = profile.contacts;

  const aboutMeData = [
    ["Статус", "Ищу работу", "Описание исковой работы"],
    [
      profile.aboutMe,
      profile.lookingForAJob,
      profile.lookingForAJobDescription,
    ],
  ];
  const contactsData = [
    ["Facebook", "Website", "VK", "Twitter", "Instagram", "Youtube", "Github"],
    [
      contacts.facebook,
      contacts.website,
      contacts.vk,
      contacts.twitter,
      contacts.instagram,
      contacts.youtube,
      contacts.github,
    ],
  ];

  return (
    <div className={styles.profileInfo}>
      <PhotoBar
        isOnwer={props.isOnwer}
        profilePhoto={profile.photos.large}
        saveUserAvatar={props.saveUserAvatar}
      />

      <div className={styles.profileDescription}>
        <div className={styles.profileName}>{profile?.fullName}</div>
        <StatusBar
          isOnwer={props.isOnwer}
          status={props.profilePage.status}
          updateStatus={props.updateStatus}
        />
        <DescriptionBlock
          descriptionName="Обо мне"
          descriptionData={aboutMeData}
        />
        <DescriptionBlock
          descriptionName="Контакты"
          descriptionData={contactsData}
          descriptionRef={true}
        />
      </div>
    </div>
  );
};

export default ProfileInfo;
