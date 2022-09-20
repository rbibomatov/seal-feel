import styles from "./PagesPanel.module.css";
import { v4 as uuidv4 } from "uuid";

const PagesPanel = (props) => {
  const usersPage = props.usersPage;

  const pages = [];
  const pagesCount = Math.ceil(usersPage.totalUsersCount / usersPage.pageSize);

  const currentPage = usersPage.currentPage;
  const startPage = currentPage - 3 < 1 ? 1 : currentPage - 3;
  const endPage = currentPage + 3 < pagesCount ? currentPage + 3 : pagesCount;

  for (let i = startPage; i <= endPage; i++) {
    if (i === startPage && startPage - 1 > 0) {
      pages.push(1, "«");
    }

    pages.push(i);

    if (i === endPage && endPage + 1 <= pagesCount) {
      pages.push("»", pagesCount);
    }
  }

  let pagesElements = pages.map((page) => {
    return (
      <span
        key={uuidv4()}
        className={
          styles.page + (currentPage === page ? " " + styles.currentPage : "")
        }
        onClick={() => {
          let switchedPage = page;

          if (page === "«") {
            switchedPage = currentPage - 3;
          } else if (page === "»") {
            switchedPage = currentPage + 3;
          }

          props.setPage(switchedPage);
          props.getUsers(switchedPage, usersPage.pageSize);
        }}
      >
        {page}
      </span>
    );
  });

  return (
    <>
      <div className={styles.pagePanel}>{pagesElements}</div>
    </>
  );
};

export default PagesPanel;
