import styles from "./navbar.module.scss";

export type NavbarProps = {
  text?: string;
};

export function Navbar({ text }: NavbarProps) {
  return <div className={styles.navbar}>{text}</div>;
}
