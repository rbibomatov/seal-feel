import styles from "./ProfileDescriptionBlock.module.css";
import { v4 as uuidv4 } from "uuid";

const ProfileDescriptionBlock = (props) => {
  const showDescriptionContent = (blockData, useRef) => {
    const itemHeaders = blockData[0];
    const profileData = blockData[1];

    let blockItems = [],
      emptyDataCount = 0,
      noDataElement = (
        <div className={styles.noDataElement}>Информация отсутствует</div>
      );

    for (let i = 0; i < profileData.length; i++) {
      let profileElement = profileData[i];

      if (profileElement) {
        if (typeof profileElement === "boolean") {
          profileElement = profileElement ? "Да" : "Нет";
        }

        blockItems.push(
          <div key={uuidv4()} className={styles.blockItem}>
            <span className={styles.blockItemHeader}>
              {itemHeaders[i] + ":"}
            </span>
            {useRef ? (
              <a
                href={profileElement}
                target="_blank"
                rel="noopener noreferrer"
              >
                {profileElement}
              </a>
            ) : (
              <span>{profileElement}</span>
            )}
          </div>
        );
      } else {
        emptyDataCount++;
      }
    }

    return emptyDataCount === profileData.length ? noDataElement : blockItems;
  };

  return (
    <div className={styles.descriptionBlock}>
      <div className={styles.blockInfo}>
        <div className={styles.blockName}>{props.blockName}</div>
        {showDescriptionContent(props.blockData, props.useRef)}
      </div>
    </div>
  );
};

export default ProfileDescriptionBlock;
