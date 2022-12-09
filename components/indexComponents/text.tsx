import router from "next/router";
import styles from "@/styles/index.module.scss";

export function Text() {
  const go = (e: React.MouseEvent) => {
    e.preventDefault();
    router.push("/firmy");
  };
  return (
    <div onClick={go} className={styles.subtitle}>
      <h1 className={styles.firmyButton}>na naszej stronie znajdziesz...</h1>
    </div>
  );
}
