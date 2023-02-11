import styles from "@/styles/pages.module/offer.module.scss";
import { Navbar } from "@/components/navbar/navbar";
import { Footer } from "@/components/footer/footer";
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
      <h1></h1>
    </div>
  );
}
