import styles from "./styles/NavBar.module.scss";
import Link from "next/link";

import { useState } from "react";
import { useRouter } from "next/router";
import CloseIcon from "@material-ui/icons/Close";
import MenuButton from "@material-ui/icons/Menu";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import SettingsIcon from "@material-ui/icons/Settings";
import SearchIcon from "@material-ui/icons/Search";

//TESTINGGG

import { useEffect } from "react";
import Image from "next/image";

function Navbar() {
  const Router = useRouter();
  const [click, setClick] = useState(false);

  function handleClick() {
    setClick(!click);
  }

  function goHome() {
    Router.push("/#");
  }

  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, [width]);
  function hideIt() {
    if (width <= 1024) {
      setClick(!click);
    }
  }

  const [show, handleShow] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);

    return () => window.removeEventListener("scroll", transitionNavBar);
  }, [show]);

  return (
    <div className={`${styles.container} ${show && styles.navBlack}`}>
      {/* ${show && styles.nav_black} */}
      <div className={styles.logo} onClick={goHome}>
        <span className={styles.mainlogo}>
          <Image
            src="/MERN-logo.png"
            width="100"
            height="40"
            layout="fixed"
            objectFit="contain"
          />
        </span>
      </div>

      <div className={styles.search}>
        <input type="text" placeholder="search" />
        <SearchIcon className={styles.icon} />
      </div>

      <div className={styles.menuicon} onClick={handleClick}>
        {click ? (
          <CloseIcon
            style={{ fill: "var(--white)", transform: "scale(1.5)" }}
          />
        ) : (
          <MenuButton
            style={{ fill: "var(--white)", transform: "scale(1.5)" }}
          />
        )}
      </div>
      <ul
        className={`${click && styles.menuactive}  ${styles.menu}`}
        onClick={hideIt}
      >
        <Link href="/#technology" passHref={true}>
          <li className={styles.list}>
            <span
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <SettingsIcon /> Account
            </span>
            <div className={styles.underline}></div>
          </li>
        </Link>
        <Link href="/#token" passHref={true}>
          <li className={styles.list}>
            <span style={{ display: "flex", alignItems: "center" }}>
              <AddShoppingCartIcon /> Cart
            </span>
            <div className={styles.underline}></div>
          </li>
        </Link>
      </ul>
    </div>
  );
}

export default Navbar;
