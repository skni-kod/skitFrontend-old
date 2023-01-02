import { useEffect, useState } from "react";

import type { IconType } from "react-icons/lib";
import {
  MdOnlinePrediction,
  MdOutlineHomeWork,
  MdWorkOutline,
} from "react-icons/md";
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
import { VscChevronDown } from "react-icons/vsc";

import { motion, Variants } from "framer-motion";

import styles from "@/styles/filters.module.scss";

type Filter = {
  category: string;
  options: {
    Icon?: IconType;
    name: string;
  }[];
  show?: Partial<
    Record<Lowercase<keyof Filter["options"][number] | "checkbox">, boolean>
  >;
};

const filters: Filter[] = [
  {
    category: "Miejsce pracy",
    options: [
      {
        name: "Rzeszów",
      },
      {
        name: "Kraków",
      },
      {
        name: "Wrocław",
      },
      {
        name: "Warszawa",
      },
      {
        name: "Poznań",
      },
    ],
    show: {
      checkbox: true,
      name: true,
    },
  },
  {
    category: "Rodzaj pracy",
    options: [
      {
        Icon: MdWorkOutline,
        name: "Praca stacjonarna",
      },
      {
        Icon: MdOnlinePrediction,
        name: "Praca zdalna",
      },
      {
        Icon: MdOutlineHomeWork,
        name: "Praca hybrydowa",
      },
    ],
    show: {
      icon: true,
      name: true,
    },
  },
  {
    category: "Technologie",
    options: [
      { Icon: SiJavascript, name: "JavaScript" },
      { Icon: SiTypescript, name: "TypeScript" },
      { Icon: SiDotnet, name: ".NET" },
      { Icon: SiCplusplus, name: "C++" },
      { Icon: SiC, name: "C" },
      { Icon: SiAngular, name: "Angular" },
      { Icon: SiReact, name: "React" },
      { Icon: SiNodedotjs, name: "Node.js" },
      { Icon: SiVuedotjs, name: "Vue.js" },
      { Icon: SiBabel, name: "Babel" },
      { Icon: SiNextdotjs, name: "Next.js" },
      { Icon: SiSass, name: "Sass" },
      { Icon: SiJava, name: "Java" },
      { Icon: SiSqlite, name: "SQLite" },
      { Icon: SiMysql, name: "MySQL" },
      { Icon: SiOracle, name: "Oracle" },
      { Icon: SiPython, name: "Python" },
      { Icon: SiDjango, name: "Django" },
    ],
    show: {
      icon: true,
    },
  },
];

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    },
  },
};

export default function Filters() {
  const [selectedCategory, setSelectedCategory] = useState("Miejsce pracy");
  const [selectedOptions, setSelectedOptions] = useState(
    filters.reduce<Record<string, Record<string, boolean>>>(
      (filters, { category, options }) => ({
        ...filters,
        [category]: options.reduce<Record<string, boolean>>(
          (options, { name }) => ({
            ...options,
            [name]: false,
          }),
          {}
        ),
      }),
      {}
    )
  );

  const handleOptionChange = (category: string, name: string) =>
    setSelectedOptions((selectedOptions) => ({
      ...selectedOptions,
      [category]: {
        ...selectedOptions[category],
        [name]: !selectedOptions[category][name],
      },
    }));

  return (
    <div className={styles.container}>
      <ul className={styles.filters}>
        {filters.map((filter) => (
          <li
            className={`${styles.category}${
              selectedCategory === filter.category
                ? ` ${styles.categorySelected}`
                : ""
            }`}
            key={filter.category}
          >
            <button
              className={styles.categoryButton}
              onClick={() => setSelectedCategory(filter.category)}
            >
              {filter.category} <VscChevronDown />
            </button>
          </li>
        ))}
        <button className={styles.button}>Filtruj</button>
      </ul>
      <div>
        {filters.map(({ category, options, show }) =>
          category === selectedCategory ? (
            <motion.ul
              animate="show"
              className={styles.options}
              key={category}
              initial="hidden"
              variants={container}
            >
              {options.map(({ Icon, name }) => (
                <li className={styles.option} key={name}>
                  {show?.checkbox ? (
                    <label
                      className={`${styles.optionButton}${
                        selectedOptions[category][name]
                          ? ` ${styles.optionButtonSelected}`
                          : ""
                      }`}
                    >
                      <input
                        checked={selectedOptions[category][name]}
                        onChange={() => handleOptionChange(category, name)}
                        type="checkbox"
                      />
                      <span>{name}</span>
                    </label>
                  ) : (
                    <button
                      className={`${styles.optionButton}${
                        selectedOptions[category][name]
                          ? ` ${styles.optionButtonSelected}`
                          : ""
                      }`}
                      onClick={() => handleOptionChange(category, name)}
                    >
                      {show?.icon && Icon && <Icon className={styles.icon} />}
                      <span>{show?.name && name}</span>
                    </button>
                  )}
                </li>
              ))}
            </motion.ul>
          ) : null
        )}
      </div>
    </div>
  );
}
