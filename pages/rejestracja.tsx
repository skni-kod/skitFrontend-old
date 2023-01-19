import Link from "next/link";
import styles from "@/styles/pages.module/login.module.scss";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { AiFillLock } from "react-icons/ai";
import { VscChevronLeft } from "react-icons/vsc";
import { CgRename } from "react-icons/cg";
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
        <h1>Zarejestruj się</h1>
        <form className={styles.loginForm} action="">
          <label className={styles.emailLabel}>
            <CgRename />
            <input
              className={styles.emailInput}
              type="text"
              placeholder="Nazwa użytkownika"
              required
              minLength={5}
              maxLength={15}
            />
          </label>
          <label className={styles.emailLabel}>
            <CgRename />
            <input
              className={styles.emailInput}
              type="text"
              placeholder="Imię"
              required
            />
          </label>
          <label className={styles.emailLabel}>
            <CgRename />
            <input
              className={styles.emailInput}
              type="text"
              placeholder="Nazwisko"
              required
            />
          </label>
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
              pattern="[a-z0-9]{1,15}"
              title="Hasło powinno zawierać liczby (od 0 do 9) lub litery (od a do z)."
              required
            />
          </label>
          <label className={styles.passLabel}>
            <AiFillLock />
            <input
              className={styles.passInput}
              type="password"
              placeholder="Powtórz hasło"
              required
            />
          </label>
          <input
            className={styles.submitInput}
            type="submit"
            value="Zarejestruj"
          />
          <div>
            Masz już konto?
            <Link className={styles.registerLink} href={"./zaloguj"}>
              {" "}
              Zaloguj się
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}
