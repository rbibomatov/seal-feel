import styles from "./DescriptionBlock.module.css";

const DescriptionBlock = (props) => {
  const showDescriptionContent = (descriptionData, createRef) => {
    const itemHeaders = descriptionData[0];
    const profileData = descriptionData[1];

    let descriptionItems = [],
      emptyDataCount = 0,
      noDataElement = <div>Информация отсутствует</div>;

    for (let i = 0; i < profileData.length; i++) {
      let profileElement = profileData[i];

      if (profileElement) {
        if (typeof profileElement === "boolean") {
          profileElement = profileElement ? "Да" : "Нет";
        }

        descriptionItems.push(
          <div className={styles.descriptionItem}>
            <span className={styles.descriptionItemHeader}>
              {itemHeaders[i] + ":"}
            </span>
            {createRef ? (
              <a
                href={"https://" + profileElement}
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

    return emptyDataCount === profileData.length
      ? noDataElement
      : descriptionItems;
  };

  return (
    <div className={styles.descriptionBlock}>
      <div className={styles.descriptionInfo}>
        <div className={styles.descriptionName}>{props.descriptionName}</div>
        {showDescriptionContent(props.descriptionData, props.descriptionRef)}
      </div>
    </div>
  );
};

export default DescriptionBlock;
