import Image from "next/image";
import styles from "./Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              WebApp Designer & Developer based in Bangladesh
            </h1>
            <p className={styles.heroDescription}>
              I help clients translate businesses or ideas into customer centric and functional platforms.
            </p>
            <div className={styles.heroActions}>
              <Link href="/contact">
              <button className={styles.seeWorksBtn}>Got a project?</button>
              <button className={styles.hireBtn}>Let's talk</button>
                </Link>
            </div>
          </div>
          <Image
            id="hero-image"
            src="/images/avatar.svg"
            alt="Picture of the author"
            width={300}
            height={300}
          />
        </div>
      </main>

      <footer className={styles.footer}>{/* Footer content */}</footer>
    </div>
  );
}
