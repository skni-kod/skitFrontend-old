import Link from "next/link";
import { Navbar } from "@/components/navbar/navbar";
import { Footer } from "@/components/footer/footer";
import styles from "@/styles/pages.module/companies.module.scss";
import { VscChevronUp, VscSearch } from "react-icons/vsc";
import { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
export default function Firmy() {
  return (
    <>
      <div>
        <Navbar />
        <div className={styles.container}>
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
        <ScrollButton />
        <Footer />
      </div>
    </>
  );
}
function Company() {
  return <div className={styles.company}></div>;
}
function ScrollButton() {
  const [scrollY, setScrollY] = useState(0);
  const onScroll = useCallback((event: any) => {
    const { pageYOffset, scrollY } = window;
    setScrollY(window.pageYOffset);
  }, []);
  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  if (scrollY > 1000) {
    return (
      <div className={styles.arrowUp}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <a href="#top">
            <VscChevronUp />
          </a>
        </motion.div>
      </div>
    );
  }
  return <></>;
}
