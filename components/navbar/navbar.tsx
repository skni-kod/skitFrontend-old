import styles from "./navbar.module.scss";
import Image from "next/image";
import Logo from "@/public/faviconWhite.png";
import Link from "next/link";

export function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.logoBig}>
        <Link className={styles.a} href={"."}>
          <div className={styles.logo}>
            <Image className={styles.logoImage} src={Logo} alt={"logo"}></Image>
            <span className={styles.foundJob}>znajdź pracę w IT</span>
          </div>
        </Link>
      </div>
      <menu className={styles.menu}>
        <Link className={styles.a} href={"."}>
          <li className={styles.li}>Strona główna</li>
        </Link>
        <Link className={styles.a} href={"/firmy"}>
          <li className={styles.li}>Firmy</li>
        </Link>
        <Link className={styles.a} href={"./dodajfirme"}>
          <li className={styles.li}>Dodaj firmę</li>
        </Link>
        <Link className={styles.a} href={"./zaloguj"}>
          <li className={styles.li}>Zaloguj</li>
        </Link>
      </menu>
    </nav>
  );
}
