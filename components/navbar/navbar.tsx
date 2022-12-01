import styles from "./navbar.module.scss";
import Image from "next/image";
import Logo from "@/public/faviconWhite.png";
import Link from "next/link";
import { motion } from "framer-motion";

export function Navbar() {
  return (
    <nav>
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.8 }}>
        <Link href={"."}>
          <div className={styles.logo}>
            <Image className={styles.logoImage} src={Logo} alt={"logo"}></Image>
            <span>znajdź pracę w IT</span>
          </div>
        </Link>
      </motion.div>

      <menu>
        <Link href={"."}>
          <li>Strona główna</li>
        </Link>
        <Link href={"/firmy"}>
          <li>Firmy</li>
        </Link>
        <Link href={"./dodajfirme"}>
          <li>Dodaj firmę</li>
        </Link>
        <Link href={"./zaloguj"}>
          <li>Zaloguj</li>
        </Link>
      </menu>
    </nav>
  );
}
