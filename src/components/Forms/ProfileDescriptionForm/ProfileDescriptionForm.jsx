import styles from "./ProfileDescriptionForm.module.css";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { updateProfile } from "../../../redux/profile.reducer";

const ProfileDescriptionForm = (props) => {
  const { register, handleSubmit } = useForm();

  const userId = useSelector((state) => state.auth.currentUser.id);
  const userFullName = useSelector((state) => state.auth.currentUser.login);
  const dispatch = useDispatch();

  const profile = props.profile;
  const contacts = props.contacts;

  const onSubmit = (data) => {
    const newProfile = {
      ...data,
      userId: userId,
      fullName: userFullName,
      lookingForAJob: Boolean(data.lookingForAJob),
    };
    dispatch(updateProfile(newProfile));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.formBlock}>
        <div className={styles.blockInfo}>
          <div className={styles.blockName}>Обо мне</div>
          <div className={styles.blockItem}>
            <b className={styles.blockItemHeader}>Описание:</b>
            <input
              type="text"
              {...register("aboutMe", {
                required: true,
              })}
              defaultValue={profile.aboutMe}
              placeholder="Я самый красивый и хороший"
            />
          </div>
          <div className={styles.blockItem}>
            <b className={styles.blockItemHeader}>Ищу работу:</b>
            <input
              type="checkbox"
              {...register("lookingForAJob")}
              defaultChecked={profile.lookingForAJob}
              placeholder="email"
            />
          </div>
          <div className={styles.blockItem}>
            <b className={styles.blockItemHeader}>Навыки:</b>
            <input
              type="text"
              {...register("LookingForAJobDescription", {
                required: true,
              })}
              defaultValue={profile.lookingForAJobDescription}
              placeholder="HTML, CSS, JS, React, Redux"
            />
          </div>
        </div>
      </div>
      <div className={styles.formBlock}>
        <div className={styles.blockInfo}>
          <div className={styles.blockName}>Контакты</div>
          <div className={styles.blockItem}>
            <b className={styles.blockItemHeader}>Facebook:</b>
            <input
              type="url"
              {...register("contacts.facebook")}
              defaultValue={contacts.facebook}
              placeholder="facebook.com"
            />
          </div>
          <div className={styles.blockItem}>
            <b className={styles.blockItemHeader}>Website:</b>
            <input
              type="url"
              {...register("contacts.website")}
              defaultValue={contacts.website}
              placeholder="my-site.ru"
            />
          </div>
          <div className={styles.blockItem}>
            <b className={styles.blockItemHeader}>VK:</b>
            <input
              type="url"
              {...register("contacts.vk")}
              defaultValue={contacts.vk}
              placeholder="vk.com"
            />
          </div>
          <div className={styles.blockItem}>
            <b className={styles.blockItemHeader}>Twitter:</b>
            <input
              type="url"
              {...register("contacts.twitter")}
              defaultValue={contacts.twitter}
              placeholder="twitter.com"
            />
          </div>
          <div className={styles.blockItem}>
            <b className={styles.blockItemHeader}>Instagram:</b>
            <input
              type="url"
              {...register("contacts.instagram")}
              defaultValue={contacts.instagram}
              placeholder="instagram.com"
            />
          </div>
          <div className={styles.blockItem}>
            <b className={styles.blockItemHeader}>Youtube:</b>
            <input
              type="url"
              {...register("contacts.youtube")}
              defaultValue={contacts.youtube}
              placeholder="youtube.com"
            />
          </div>
          <div className={styles.blockItem}>
            <b className={styles.blockItemHeader}>Github:</b>
            <input
              type="url"
              {...register("contacts.github")}
              defaultValue={contacts.github}
              placeholder="github.com"
            />
          </div>
        </div>
      </div>
      <div>
        <button className={styles.saveProfileButton} type="submit">
          Сохранить
        </button>
      </div>
    </form>
  );
};

export default ProfileDescriptionForm;
