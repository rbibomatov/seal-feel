import styles from "./ProfileInfo.module.css";
import { useState } from "react";
import PhotoBar from "./ProfilePhotoBar/ProfilePhotoBar";
import StatusBar from "./ProfileStatus/ProfileStatus";
import DescriptionBlock from "./ProfileDescriptionBlock/ProfileDescriptionBlock";
import ProfileDescriptionForm from "../../../Forms/ProfileDescriptionForm/ProfileDescriptionForm";

const ProfileInfo = (props) => {
  const [editMode, setEditMode] = useState(false);
  const profile = props.profilePage.profile;
  const contacts = profile.contacts;

  const aboutMeData = [
    ["Описание", "Ищу работу", "Навыки"],
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

  const showProfileDescription = (
    <div>
      <DescriptionBlock blockName="Обо мне" blockData={aboutMeData} />
      <DescriptionBlock
        blockName="Контакты"
        blockData={contactsData}
        useRef={true}
      />
      {props.isOnwer ? (
        <button
          className={styles.changeProfileButton}
          onClick={() => setEditMode(true)}
        >
          Изменить
        </button>
      ) : (
        ""
      )}
    </div>
  );

  const editProfileDescription = (
    <ProfileDescriptionForm profile={profile} contacts={contacts} />
  );

  return (
    <div className={styles.profileInfo}>
      <PhotoBar
        isOnwer={props.isOnwer}
        profilePhoto={profile.photos.large}
        updatePhoto={props.updatePhoto}
      />
      <div className={styles.profileDescription}>
        <div className={styles.profileName}>{profile?.fullName}</div>
        <StatusBar
          isOnwer={props.isOnwer}
          status={props.profilePage.status}
          updateStatus={props.updateStatus}
        />
        {editMode ? editProfileDescription : showProfileDescription}
      </div>
    </div>
  );
};

export default ProfileInfo;
