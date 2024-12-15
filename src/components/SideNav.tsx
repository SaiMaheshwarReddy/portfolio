"use client";
import React, { useState } from "react";
import "./sideNavStyles.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
const SideNav = () => {
  const pathname = usePathname();
  const [check, setCheck] = useState(false);
  const handleChange = () => {
    setCheck((prev) => !prev);
  };

  return (
    <>
      <header className="header">
        <nav>
          <input
            className="menu-btn"
            type="checkbox"
            id="menu-btn"
            aria-label="Toggle Navigaton Menu"
            checked={check}
            onChange={handleChange}
          />
          <label className="menu-icon" htmlFor="menu-btn">
            <span className="navicon"></span>
          </label>
          <ul className="menu">
            <li>
              <Link
                href="/"
                onClick={handleChange}
                className={pathname === "/" ? "text-primary" : ""}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/work"
                onClick={handleChange}
                className={pathname === "/work" ? "text-primary" : ""}
              >
                Work
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                onClick={handleChange}
                className={pathname === "/blog" ? "text-primary" : ""}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                onClick={handleChange}
                className={pathname === "/about" ? "text-primary" : ""}
              >
                About
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default SideNav;
