import Image from "next/image";
import styles from "./Home.module.css";
import Link from "next/link";
import SkillData from "@/lib/skillData";
import SkillCard from "@/components/body/skillCard";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              Fullstack Developer & Designer based in Bangladesh
            </h1>
            <p className={styles.heroDescription}>
              I help clients translate businesses or ideas into customer centric
              and functional platforms.
            </p>
            <div className={styles.heroActions}>
              <Link href="/contact">
                <button className={styles.seeWorksBtn}>Got a project?</button>
                <button className={styles.hireBtn}>Let&apos;s talk</button>
              </Link>
            </div>
          </div>
          <Image
            className={styles.heroImage}
            src="/images/avatar.svg"
            alt="Picture of the author"
            width={300}
            height={300}
          />
        </div>
      </main>

      <h2 className={styles.skillTitle}>Services I offer</h2>
      <div className={styles.skillsContainer}>
        {SkillData.map((skill, index) => (
          <SkillCard
            key={index}
            title={skill.title}
            description={skill.description}
            title_icon={skill.title_icon}
            tools_icons={skill.tools_icons}
          />
        ))}
      </div>

      <footer className={styles.footer}>{/* Footer content */}</footer>
    </div>
  );
}
