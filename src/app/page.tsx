"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "./Home.module.css";
import Banner from "@/components/body/Banner";
import ProjectView from "@/components/body/ProjectView";
import { ProjectInterface } from "@/types";

export default function Home() {
  const data: ProjectInterface[] = [
    {
      name: "WRITELIKEPRO",
      year: "2024",
      description: "An AI keyboard with lots of custom features.",
      platform: "Android & IOS",
      role: "Full Stack Designer and Developer",
      link: "#",
    },
  ];

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
        Hi, I&#39;m Shuvrojit, a freelance product designer from Bangladesh.
        Partnering with companies to create digital interfaces that play a
        crucial role in realising their objects for success.
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
      <Banner />

      <div className={styles.works_container}>
        <h2>Recent Works</h2>
        <ProjectView projectData={data} />
      </div>
    </div>
  );
}
