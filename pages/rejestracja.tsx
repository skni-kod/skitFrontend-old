import Link from "next/link";
import styles from "@/styles/pages.module/login.module.scss";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { AiFillLock } from "react-icons/ai";
import { VscChevronLeft } from "react-icons/vsc";
import { CgRename } from "react-icons/cg";
export default function Register() {
  function validate(event: React.ChangeEvent<HTMLInputElement>) {
    if (event.target.value.length < 10) {
      console.log("debil"); /////TODO
    }
  }
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
              onChange={validate}
            />
          </label>
          <label className={styles.emailLabel}>
            <CgRename />
            <input
              className={styles.emailInput}
              type="text"
              placeholder="Imię"
              onChange={validate}
            />
          </label>
          <label className={styles.emailLabel}>
            <CgRename />
            <input
              className={styles.emailInput}
              type="text"
              placeholder="Nazwisko"
              onChange={validate}
            />
          </label>
          <label className={styles.emailLabel}>
            <MdOutlineAlternateEmail />
            <input
              className={styles.emailInput}
              type="email"
              placeholder="E-mail"
            />
          </label>
          <label className={styles.passLabel}>
            <AiFillLock />
            <input
              className={styles.passInput}
              type="password"
              placeholder="Hasło"
            />
          </label>
          <label className={styles.passLabel}>
            <AiFillLock />
            <input
              className={styles.passInput}
              type="password"
              placeholder="Powtórz hasło"
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
