import styles from "@/styles/pages.module/index.module.scss";
import Link from "next/link";

export function Text() {
  return (
    <Link className={styles.subtitle} href="/firmy">
      <h1 className={styles.firmyButton}>na naszej stronie znajdziesz...</h1>
    </Link>
  );
}
