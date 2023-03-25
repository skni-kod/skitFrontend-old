import styles from "@/styles/pages.module/offer.module.scss";
import { Navbar } from "@/components/navbar/navbar";
import { Footer } from "@/components/footer/footer";
import Image from "next/image";
import Logo from "@/public/companies/1.jpg";
export default function OfferView() {
  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <OfferInfo />
      </div>
      <Footer />
    </div>
  );
}
function OfferInfo() {
  return (
    <div className={styles.offerInfo}>
      <Image className={styles.compImg} src={Logo} alt={"logo"}></Image>
      <div className={styles.offerTitle}>Junior React Developer</div>
      <div className={styles.description}>
        <div className={styles.attr}>Praca zdalna</div>
        <div className={styles.attr}>4500zł</div>
        <div className={styles.attr}>Rzeszów</div>
      </div>
      <div className={styles.rating}>Ocena: 8.8</div>
    </div>
  );
}
