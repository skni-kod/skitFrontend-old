import styles from "./navbar.module.scss";
import Image from "next/image";
import Logo from "@/public/favicon.png";
import Link from "next/link";
import { VscMenu } from "react-icons/vsc";

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
      <menu className={styles.mobile_menu}>
        <div className={styles.menu_icon}>
          <VscMenu />
        </div>
        <div className={styles.mobile_menu_items}>
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
        </div>
      </menu>
    </nav>
  );
}
