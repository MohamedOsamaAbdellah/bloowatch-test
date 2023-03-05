import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const { cartTotalItems } = useSelector((state) => state.cart);
  const [showMenu, setShowMenu] = useState(true);
  const [sideMenu, setSideMenu] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setShowMenu(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleMenuClick = () => {
    setSideMenu(!sideMenu);
  };

  return (
    <div className={styles.navbar}>
      <Link className={styles.logoContainer} to="/">
        <img
          className={styles.logo}
          src="https://www.bloowatch.com/hubfs/Bloowatch_Jan2017/images/bloowatch-logo2.png"
          alt="logo"
        />
      </Link>
      {showMenu ? (
        <div className={styles.options}>
          <Link className={styles.option} to="/">
            SHOP
          </Link>
          <Link className={styles.option} to="#">
            BLOG
          </Link>
          <Link className={styles.option} to="#">
            SEARCH
          </Link>
          <Link className={styles.option} to="/cart">
            <span>CART</span>
            {cartTotalItems > 0 && (
              <span className={styles.cartCount}>{cartTotalItems}</span>
            )}
          </Link>
        </div>
      ) : (
        <div className={styles.hamburgerMenu} onClick={handleMenuClick}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      )}
      {sideMenu && (
        <div className={styles.sidebar}>
          <Link className={styles.sidebarOption} to="/">
            SHOP
          </Link>
          <Link className={styles.sidebarOption} to="#">
            BLOG
          </Link>
          <Link className={styles.sidebarOption} to="#">
            SEARCH
          </Link>
          <Link className={styles.sidebarOption} to="/cart">
            <span>CART</span>
            {cartTotalItems > 0 && (
              <span className={styles.cartCount}>{cartTotalItems}</span>
            )}
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
