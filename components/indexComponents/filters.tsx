import styles from "@/styles/pages.module/companies.module.scss";
import { VscChevronDown, VscChevronRight } from "react-icons/vsc";
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
import {
  MdCheckBox,
  MdOnlinePrediction,
  MdOutlineHomeWork,
  MdWorkOutline,
} from "react-icons/md";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

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
  function select(n: number) {
    setIsShown(n);
    setSelected(n);
  }
  var [isShown, setIsShown] = useState(3);
  var [isSelected, setSelected] = useState(3);
  const optionStyle = {
    color: "inherit",
  };
  const selectedStyle = {
    color: "#55828b",
  };
  return (
    <div className={styles.container}>
      <ul className={styles.filters}>
        {isSelected == 1 && (
          <li onClick={() => select(1)} style={selectedStyle}>
            Miejsce pracy <VscChevronDown />
          </li>
        )}
        {isSelected != 1 && (
          <li onClick={() => select(1)} style={optionStyle}>
            Miejsce pracy <VscChevronDown />
          </li>
        )}
        {isSelected == 2 && (
          <li onClick={() => select(2)} style={selectedStyle}>
            Rodzaj pracy <VscChevronDown />
          </li>
        )}
        {isSelected != 2 && (
          <li onClick={() => select(2)} style={optionStyle}>
            Rodzaj pracy <VscChevronDown />
          </li>
        )}
        {isSelected == 3 && (
          <li onClick={() => select(3)} style={selectedStyle}>
            Technologie <VscChevronDown />
          </li>
        )}
        {isSelected != 3 && (
          <li onClick={() => select(3)} style={optionStyle}>
            Technologie <VscChevronDown />
          </li>
        )}
        <div className={styles.filterButton}>Filtruj</div>
      </ul>
      {isShown == 1 && (
        <motion.div variants={container} initial="hidden" animate="show">
          <CityFilter />
        </motion.div>
      )}
      {isShown == 2 && (
        <motion.div variants={container} initial="hidden" animate="show">
          <WorkFilter />
        </motion.div>
      )}
      {isShown == 3 && (
        <motion.div variants={container} initial="hidden" animate="show">
          <TechFilter />
        </motion.div>
      )}
      <div className={styles.searchResultsTitle}>Wyniki wyszukiwania: </div>
    </div>
  );
}
function CityFilter() {
  const [checked, setChecked] = useState(false);
  function handleChange() {
    setChecked(!checked);
  }
  useEffect(() => {
    setChecked(!checked);
  }, []);
  return (
    <div className={styles.filterOptions}>
      <div>
        <VscChevronRight />
        <label className={styles.workType}>
          <input type="checkbox" checked={checked} onChange={handleChange} />
          <span className={styles.workType}>Rzeszów</span>
        </label>
      </div>
      <div>
        <label className={styles.workType}>
          <input type="checkbox" checked={checked} onChange={handleChange} />
          <span className={styles.workType}>Kraków</span>
        </label>
      </div>
      <div>
        <label className={styles.workType}>
          <input type="checkbox" checked={checked} onChange={handleChange} />
          <span className={styles.workType}>Wrocław</span>
        </label>
      </div>
      <div>
        <label className={styles.workType}>
          <input type="checkbox" checked={checked} onChange={handleChange} />
          <span className={styles.workType}>Warszawa</span>
        </label>
      </div>
      <div>
        <label className={styles.workType}>
          <input type="checkbox" checked={checked} onChange={handleChange} />
          <span className={styles.workType}>Poznań</span>
        </label>
      </div>
    </div>
  );
}
function WorkFilter() {
  return (
    <div className={styles.filterOptions}>
      <VscChevronRight />
      <div>
        <MdWorkOutline />
        <span className={styles.workType}>Praca stacjonarna</span>
      </div>
      <div>
        <MdOnlinePrediction />
        <span className={styles.workType}>Praca zdalna</span>
      </div>
      <div>
        <MdOutlineHomeWork />
        <span className={styles.workType}>Praca hybrydowa</span>
      </div>
    </div>
  );
}
function TechFilter() {
  return (
    <div className={styles.filterOptions}>
      <VscChevronRight />
      <div className={styles.tech}>
        <SiJavascript />
      </div>
      <div className={styles.tech}>
        <SiTypescript />
      </div>
      <div className={styles.tech}>
        <SiDotnet />
      </div>
      <div className={styles.tech}>
        <SiCplusplus />
      </div>
      <div className={styles.tech}>
        <SiC />
      </div>
      <div className={styles.tech}>
        <SiAngular />
      </div>
      <div className={styles.tech}>
        <SiReact />
      </div>
      <div className={styles.tech}>
        <SiNodedotjs />
      </div>
      <div className={styles.tech}>
        <SiVuedotjs />
      </div>
      <div className={styles.tech}>
        <SiBabel />
      </div>
      <div className={styles.tech}>
        <SiNextdotjs />
      </div>
      <div className={styles.tech}>
        <SiSass />
      </div>
      <div className={styles.tech}>
        <SiJava />
      </div>
      <div className={styles.tech}>
        <SiSqlite />
      </div>
      <div className={styles.tech}>
        <SiMysql />
      </div>
      <div className={styles.tech}>
        <SiOracle />
      </div>
      <div className={styles.tech}>
        <SiPython />
      </div>
      <div className={styles.tech}>
        <SiDjango />
      </div>
    </div>
  );
}
