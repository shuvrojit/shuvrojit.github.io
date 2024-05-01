"use client";
import React, { useState } from "react";
import Link from "next/link";
import styled from "styled-components";
import { Lato } from "next/font/google";

const latoBold = Lato({
  weight: "700",
  subsets: ["latin"],
});

const latoMedium = Lato({
  weight: "400",
  subsets: ["latin"],
});

const Nav = styled.nav`
  width: 80vw;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    width: 100vw;
  }
`;

const NavTitle = styled.h1`
  margin: 1rem;
  font-size: 1.2rem;
`;

const NavList = styled.ul<{ isopen: boolean }>`
  font-size: 1rem;
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    top: 0;
    position: fixed;
    display: ${(props) => (props.isopen ? "flex" : "none")};
    background-color: #fff;
    width: 100%;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: 0.3s;
    z-index: 100;
    gap: 1rem;
  }
`;

const NavItem = styled.li`
  margin-right: 1rem;
`;

const HamburgerMenu = styled.div`
  display: block;
  cursor: pointer;
  z-index: 999;
  margin: 1rem;

  @media (max-width: 768px) {
    display: block;
  }

  span {
    display: block;
    width: 30px;
    height: 4px;
    background-color: black;
    margin-bottom: 6px;
    transition: 0.4s;
  }

  .bar1.change {
    transform: rotate(-45deg) translate(-9px, 6px);
  }

  .bar2.change {
    opacity: 0;
  }

  .bar3.change {
    transform: rotate(45deg) translate(-8px, -8px);
  }
  @media (min-width: 769px) {
    display: none;
  }
`;

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Nav>
        <NavTitle className={latoBold.className}>
          <Link href="/">Shuvrojit Biswas</Link>
        </NavTitle>
        <NavList $isopen={isOpen} className={latoMedium.className}>
          <NavItem>
            <Link href="/work">Work</Link>
          </NavItem>
          <NavItem>
            <Link href="/blog">Blog</Link>
          </NavItem>

          <NavItem>
            <Link href="/about">About</Link>
          </NavItem>

          <NavItem>
            <Link href="/contact">Contact</Link>
          </NavItem>
        </NavList>

        <HamburgerMenu onClick={toggleMenu}>
          <span className={isOpen ? "bar1 change" : "bar1"}></span>
          <span className={isOpen ? "bar2 change" : "bar2"}></span>
          <span className={isOpen ? "bar3 change" : "bar3"}></span>
        </HamburgerMenu>
      </Nav>
    </>
  );
};

export default Header;
