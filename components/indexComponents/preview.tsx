import Link from "next/link";
import PrevCompany from "./prevCompany";
import styles from "@/styles/pages.module/index.module.scss";
import ScrollUp from "./scrollUp";

export function Preview() {
  return (
    <div className={styles.preview} id="preview">
      <h2 className={styles.prevtitle}>Najwyżej oceniane oferty: </h2>
      <div className={styles.prevcompanies}>
        <PrevCompany />
      </div>
      <Link href={"./firmy"}>
        <h3 className={styles.link}>Pokaż wszystko</h3>
      </Link>
      <ScrollUp />
    </div>
  );
}
