import Link from "next/link";
import styles from "@/styles/pages.module/index.module.scss";
import Image from "next/image";
import Company1 from "@/public/companies/1.jpg";
import Company2 from "@/public/companies/2.png";
import Company3 from "@/public/companies/3.jpg";
import Company4 from "@/public/companies/4.png";
type Offer = {
  desc: {
    name: string;
    jobType: string;
    salary: string;
    city: string;
    rating: number;
    image: any;
  }[];
  num: number;
};

const companies: Offer[] = [
  {
    desc: [
      {
        name: "Junior React developer",
        jobType: "Zdalnie",
        salary: "4500zł",
        city: "Rzeszów",
        rating: 5.6,
        image: Company1,
      },
      {
        name: "Junior Next.js developer",
        jobType: "Stacjonarnie",
        salary: "2900zł",
        city: "Wrocław",
        rating: 7.8,
        image: Company2,
      },
      {
        name: "Senior C++ engineer",
        jobType: "Hybrydowo",
        salary: "7800zł",
        city: "Warszawa",
        rating: 2.3,
        image: Company3,
      },
      {
        name: "Junior C developer",
        jobType: "Zdalnie",
        salary: "3200-5000zł",
        city: "Kraków",
        rating: 8.9,
        image: Company4,
      },
      {
        name: "Junior Java developer",
        jobType: "Zdalnie",
        salary: "4400zł",
        city: "Rzeszów",
        rating: 6.4,
        image: Company1,
      },
    ],
    num: 0,
  },
];

export default function PrevCompany() {
  return (
    <Link href={"./firmy"}>
      <div className={styles.preview}>
        {companies.map(({ desc, num }) => (
          <div key={num}>
            {desc.map(({ name, jobType, salary, city, rating, image }) => (
              <div key={name} className={styles.prevcompany}>
                <Image
                  className={styles.compImg}
                  src={image}
                  alt={"companyLogo"}
                />

                <div className={styles.description}>
                  <div className={styles.offerTitle}>{name}</div>
                  <div className={styles.jobType}>{jobType}</div>
                  <div className={styles.salary}>{salary}</div>
                  <div className={styles.city}>{city}</div>
                </div>

                <div className={styles.rating}>{rating}</div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </Link>
  );
}
