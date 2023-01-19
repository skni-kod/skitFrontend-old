import styles from "@/styles/pages.module/companies.module.scss";
import { VscSearch } from "react-icons/vsc";

export default function Search() {
  return (
    <div className={styles.searchField}>
      <form className={styles.searchForm}>
        <input
          placeholder="Wyszukaj firmę, technologie, miasto"
          type="text"
          className={styles.searchInput}
        ></input>
        <button type="submit" className={styles.searchSubmit}>
          <VscSearch />
        </button>
      </form>
    </div>
  );
}
