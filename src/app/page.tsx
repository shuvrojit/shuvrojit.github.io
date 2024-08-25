"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Image
        className={styles.profile__image}
        src="/images/profile-pic.jpg"
        alt="hero"
        width={56}
        height={56}
      />
      <h1 className={styles.title}>
        {"Creating software \nthat functions seamlessly."}
      </h1>
      <p className={styles.description}>
        Hi, I'm Shuvro, a freelance product designer from Bangladesh. Partnering
        with companies to create digital interfaces that play a crucial role in
        realising their objects for success.
      </p>
      <div className={styles.social__links}>
        <p>email / shuvrojit.biswas17@gmail.com</p>
        <p>
          twitter /<Link href="https://x.com/shuv40"> @shuv40</Link>
        </p>
        <p>
          linkedin /
          <Link href="https://linkedin.com/in/shuvrojit"> shuvrojit</Link>
        </p>
        <p>
          dribble /<Link href="https://dribbble.com/shuvrojit"> shuvrojit</Link>
        </p>
      </div>
      <div className={styles.action__buttons}>
        <a href="mailto:shuvrojit.biswas17@gmail.com">
          <button className={styles.email__button}>Reach out via email</button>
        </a>
        <div className={styles.available__container}>
          <div className={styles.available__icon}></div>
          <p className={styles.available__text}>Available for September</p>
        </div>
      </div>
    </div>
  );
}
