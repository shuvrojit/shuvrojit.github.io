import { useState } from "react";
import "./hamburger.module.css";

type HamburgerMenuProps = {
  direction: string;
  position: string;
};

const HamburgerMenu = ({ direction, position }: HamburgerMenuProps) => {
  const [toggle, setToggle] = useState<boolean>(false);

  function toggleMenu() {
    setToggle(!toggle);
  }

  return (
    <>
      <div
        className={
          "hamburger-menu" +
          (toggle ? " " + direction + " " : "") +
          (position ? " " + position + " " : " top-left ")
        }
        onClick={toggleMenu}
      >
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </>
  );
};

export default HamburgerMenu;
