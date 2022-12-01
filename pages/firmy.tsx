import Link from "next/link";
import { Navbar } from "@/components/navbar/navbar";
import { Footer } from "@/components/footer/footer";
import styles from "@/styles/companies.module.scss";
import { VscChevronUp } from "react-icons/vsc";
export default function Firmy() {
  return (
    <>
      <div>
        <Navbar />
        <div className={styles.container}>
          <div className={styles.searchField}>
            <form className={styles.searchForm}>
              <input type="text" className={styles.searchInput}></input>
              <button type="submit" className={styles.searchSubmit}>
                Szukaj
              </button>
            </form>
          </div>
          <ul className={styles.filters}>
            <li className={styles.filtersComp}>Firmy</li>
            <li className={styles.filtersCity}>Miejsce pracy</li>
            <li className={styles.filtersType}>Rodzaj pracy</li>
            <li className={styles.filtersTech}>Technologie</li>
            <div className={styles.filterButton}>Filtruj</div>
          </ul>
          <div className={styles.searchResultsTitle}>Wyniki wyszukiwania: </div>
          <Company />
          <Company />
          <Company />
          <Company />
          <Company />
          <Company />
          <Company />
          <Company />
          <Company />
        </div>
        <a href="#top">
          <VscChevronUp className={styles.arrow} />
        </a>
        <Footer />
      </div>
    </>
  );
}
function Company() {
  return <div className={styles.company}>xd</div>;
}
