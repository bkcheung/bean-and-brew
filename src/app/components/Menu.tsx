"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import cx from "classnames";

const Menu = () => {
  const [showMenu, setShowMenu] = useState(false);
  function toggleMenu() {
    setShowMenu(!showMenu);
  }
  return (
    <div className="z-50">
      <div
        id="openMenu"
        className={cx(
          "flex fixed top-0 left-0 w-[100vw] h-[100vh]",
          showMenu ? "" : "hidden",
        )}
      >
        <div
          className={cx(
            "bg-white/95  fixed top-0 left-0 min-h-[100vh] w-[75vw] \
            max-w-[375px] flex flex-col justify-center text-3xl",
            showMenu ? "show" : "hidden",
          )}
          aria-label="menu"
        >
          <button
            className="absolute top-10 right-10 text-gray-400 text-base"
            onClick={toggleMenu}
          >
            close menu
          </button>
          <Link className="p-10" href="/" onClick={toggleMenu}>
            Home
          </Link>
          <Link className="p-10" href="/shop" onClick={toggleMenu}>
            Shop All
          </Link>
          <Link className="p-10" href="/cart" onClick={toggleMenu}>
            Cart
          </Link>
        </div>
        <button
          className={cx("flex-1 cursor-default")}
          onClick={toggleMenu}
        ></button>
      </div>
      <button onClick={toggleMenu}>
        <Image className="w-10" src="/images/menu.png" alt="menu logo" width={100} height={100} />
      </button>
    </div>
  );
};

export default Menu;
