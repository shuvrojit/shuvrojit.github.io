// import Image from "next/image";
import Image from "next/image";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              Full Stack Developer & Designer based in Bangladesh
            </h1>
            <p className={styles.heroDescription}>
              I help clients translate ideas into business products. I have
              worked with a lot of cool people. Most recently @Lorem and @Ipsum
            </p>
            <div className={styles.heroActions}>
              <button className={styles.seeWorksBtn}>See Works</button>
              <button className={styles.hireBtn}>Hire Me</button>
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
