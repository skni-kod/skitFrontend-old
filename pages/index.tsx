import Head from "next/head";
import { Navbar } from "@/components/navbar/navbar";
import { Footer } from "@/components/footer/footer";
import { Text } from "@/components/indexComponents/text";
import styles from "@/styles/pages.module/index.module.scss";
import { Preview } from "@/components/indexComponents/preview";
import router, { useRouter } from "next/router";
import React, { useState } from "react";
import { VscChevronDown } from "react-icons/vsc";
import Link from "next/link";

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
        <a href="#preview">
          <VscChevronDown className={styles.button} />
        </a>
      </div>
      <Preview />
      <Footer />
    </div>
  );
}
