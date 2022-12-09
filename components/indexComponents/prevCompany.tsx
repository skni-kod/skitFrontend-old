import Link from "next/link";
import styles from "@/styles/pages.module/index.module.scss";
import Image from "next/image";
import Company from "@/public/companies/asseco-logo-753x424-1.jpg";

export default function PrevCompany() {
  return (
    <Link href={"./firmy"}>
      <div className={styles.prevcompany}>
        <Image className={styles.compImg} src={Company} alt={"companyLogo"} />
        <div className={styles.description}>
          <div className={styles.offerTitle}>Tytuł oferty junior developer</div>
          <div className={styles.jobType}>Pełny etat</div>
          <div className={styles.salary}>3500-4000zł</div>
        </div>
        <div className={styles.rating}>7.5</div>
      </div>
    </Link>
  );
}
