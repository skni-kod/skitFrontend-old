import Link from "next/link";
import { Navbar } from "@/components/navbar/navbar";
import { Footer } from "@/components/footer/footer";
import styles from "@/styles/pages.module/companies.module.scss";
import { VscSearch } from "react-icons/vsc";
import ScrollUp from "@/components/indexComponents/scrollUp";
import Search from "@/components/indexComponents/search";
import Filters from "@/components/indexComponents/filters";
import PrevCompany from "@/components/indexComponents/prevCompany";

export default function Firmy() {
  return (
    <>
      <div>
        <Navbar />
        <div className={styles.container}>
          <Search />
          <Filters />
          <PrevCompany />
        </div>
        <ScrollUp />
        <Footer />
      </div>
    </>
  );
}
