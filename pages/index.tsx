import Head from "next/head";
import { Navbar } from "@/components/navbar/navbar";
import { Footer } from "@/components/footer/footer";
import styles from "@/styles/index.module.scss";

export default function Root() {
  return (
    <div>
      <Head>
        <title>sk-it</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.stats}>
          <h1>Na naszej stronie znajdziesz: </h1>
          <ul>
            <li>
              <span className={styles.nfirm}>0</span> firm
            </li>
            <li>
              <span className={styles.nofert}>0</span> ofert pracy
            </li>
            <li>
              <span className={styles.tech}>0</span> technologii
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}
