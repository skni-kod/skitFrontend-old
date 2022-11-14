import Head from "next/head";
import { Navbar } from "@/components/navbar/navbar";
import { Footer } from "@/components/footer/footer";
import styles from "@/styles/index.module.scss";
import { render } from "react-dom";
import { motion } from "framer-motion";
import Image from "next/image";
import Background from "@/public/backg.svg";
import router, { useRouter } from "next/router";
import React from "react";

export default function Root() {
  return (
    <div className={styles.body}>
      <Head>
        <title>sk-it</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className={styles.container1}>
        <div className={styles.stats}>
          <h2>IT?</h2>
          <Text />
          <ul>
            <li className={styles.statElem}>
              <span className={styles.stat}>0</span> pracodawców,
            </li>
            <li className={styles.statElem}>
              <span className={styles.stat}>0</span> ofert pracy,
            </li>
            <li className={styles.statElem}>
              <span className={styles.stat}>0</span> technologii.
            </li>
          </ul>
        </div>
        <div className={styles.button}></div>
      </div>
      <Footer />
    </div>
  );
}

function Text() {
  const go = (e: React.MouseEvent) => {
    e.preventDefault();
    router.push("/firmy");
  };
  return (
    <div onClick={go} className={styles.subtitle}>
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <h1>na naszej stronie znajdziesz...</h1>
      </motion.div>
    </div>
  );
}
