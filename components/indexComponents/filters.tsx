import styles from "@/styles/pages.module/companies.module.scss";
import { VscChevronDown } from "react-icons/vsc";
import {
  SiAngular,
  SiBabel,
  SiC,
  SiCplusplus,
  SiDjango,
  SiDotnet,
  SiJava,
  SiJavascript,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiOracle,
  SiPython,
  SiReact,
  SiSass,
  SiSqlite,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";
import { MdOnlinePrediction, MdWorkOutline } from "react-icons/md";
import { useState } from "react";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";

export default function Filters(this: any) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };
  var [isShown, setIsShown] = useState(3);
  return (
    <div className={styles.container}>
      <ul className={styles.filters}>
        <li className={styles.filtersComp}>
          Firmy <VscChevronDown />
        </li>
        <li className={styles.filtersCity}>
          Miejsce pracy <VscChevronDown />
        </li>
        <li onClick={() => setIsShown(2)} className={styles.filtersType}>
          Rodzaj pracy <VscChevronDown />
        </li>
        <li onClick={() => setIsShown(3)} className={styles.filtersTech}>
          Technologie <VscChevronDown />
        </li>
        <div className={styles.filterButton}>Filtruj</div>
      </ul>

      {isShown == 3 && (
        <motion.div variants={container} initial="hidden" animate="show">
          <TechFilter />
        </motion.div>
      )}

      {isShown == 2 && (
        <motion.div variants={container} initial="hidden" animate="show">
          <WorkFilter />
        </motion.div>
      )}

      <div className={styles.searchResultsTitle}>Wyniki wyszukiwania: </div>
    </div>
  );
}
function WorkFilter() {
  return (
    <div className={styles.filterOptions}>
      <div>
        <MdWorkOutline />
      </div>
      <div>
        <MdOnlinePrediction />
      </div>
    </div>
  );
}
function TechFilter() {
  return (
    <div className={styles.filterOptions}>
      <div>
        <SiJavascript />
      </div>
      <div>
        <SiTypescript />
      </div>
      <div>
        <SiDotnet />
      </div>
      <div>
        <SiCplusplus />
      </div>
      <div>
        <SiC />
      </div>
      <div>
        <SiAngular />
      </div>
      <div>
        <SiReact />
      </div>
      <div>
        <SiNodedotjs />
      </div>
      <div>
        <SiVuedotjs />
      </div>
      <div>
        <SiBabel />
      </div>
      <div>
        <SiNextdotjs />
      </div>
      <div>
        <SiSass />
      </div>
      <div>
        <SiJava />
      </div>
      <div>
        <SiSqlite />
      </div>
      <div>
        <SiMysql />
      </div>
      <div>
        <SiOracle />
      </div>
      <div>
        <SiPython />
      </div>
      <div>
        <SiDjango />
      </div>
    </div>
  );
}
