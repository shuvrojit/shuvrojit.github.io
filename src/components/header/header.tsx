"use client";
import { useState } from "react";
import HamburgerMenu from "./hamburger-menu";
import styles from "./header.module.css";
import Link from "next/link";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  function toggleMenu() {
    setToggle(!toggle);
  }
  return (
    <>
      <div className={styles.header__container}>
          <Link href="/">
        <div className={styles.branding}>
          <h1>Shuvrojit Biswas</h1>
          <h2>Full Stack Developer & Desinger</h2>
        </div>
          </Link>
        <div
          className={
            (toggle ? " overlay__content " : "") +
            styles.overlay +
            " " +
            styles.overlay__left
          }
        >
          <Link href="/work">Work</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/music">Music</Link>
          <Link href="/about">About</Link>
          <Link href="/contct">Contact</Link>
        </div>
        <div className={styles.hamburger} onClick={toggleMenu}>
          <HamburgerMenu direction="right" position="top-right" />
        </div>
      </div>
    </>
  );
};

export default Header;
