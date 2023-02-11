import { motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { VscChevronUp } from "react-icons/vsc";
import styles from "@/styles/pages.module/companies.module.scss";

export default function ScrollUp() {
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
  if (scrollY > 500) {
    return (
      <div className={styles.arrowUp}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <a className={styles.arrowUp_inner} href="#top">
            <VscChevronUp />
          </a>
        </motion.div>
      </div>
    );
  }
  return <></>;
}
