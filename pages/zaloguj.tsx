import Link from "next/link";
import styles from "@/styles/pages.module/login.module.scss";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { AiFillLock } from "react-icons/ai";
import { VscChevronLeft } from "react-icons/vsc";
export default function Zaloguj() {
  return (
    <>
      <div className={styles.loginPage}>
        <Link href=".">
          <div className={styles.return}>
            <VscChevronLeft />
            Powrót
          </div>
        </Link>
        <h1 className={styles.title}>
          <Link href={"."}>SK-IT</Link>
        </h1>
        <form className={styles.loginForm} action="">
          <label className={styles.emailLabel}>
            <MdOutlineAlternateEmail />
            <input
              className={styles.emailInput}
              type="email"
              placeholder="E-mail"
              required
            />
          </label>
          <label className={styles.passLabel}>
            <AiFillLock />
            <input
              className={styles.passInput}
              type="password"
              placeholder="Hasło"
              required
            />
          </label>
          <label className={styles.rememberLabel}>
            <input
              className={styles.rememberInput}
              type="checkbox"
              name="remember"
            />
            <span className={styles.checkmark}></span>
            Zapamiętaj mnie
          </label>
          <input className={styles.submitInput} type="submit" value="Zaloguj" />
          <Link className={styles.registerLink} href={"./rejestracja"}>
            Zarejestruj się
          </Link>
          <Link className={styles.forgotLink} href={"#"}>
            Zapomniałeś hasła?
          </Link>
        </form>
      </div>
    </>
  );
}
