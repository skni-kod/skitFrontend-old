import Link from "next/link";
import PrevCompany from "./prevCompany";
import styles from "@/styles/index.module.scss";

export function Preview() {
  return (
    <div className={styles.preview} id="preview">
      <h2 className={styles.prevtitle}>Najwyżej oceniane oferty: </h2>
      <div className={styles.prevcompanies}>
        <PrevCompany />
        <PrevCompany />
        <PrevCompany />
        <PrevCompany />
        <PrevCompany />
        <PrevCompany />
      </div>
      <Link href={"./firmy"}>
        <h3 className={styles.link}>Pokaż więcej</h3>
      </Link>
    </div>
  );
}
