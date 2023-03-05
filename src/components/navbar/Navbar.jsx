import React from "react";
import { Link } from "react-router-dom";
// import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
// import CartDropdown from "../cart-dropdown/CartDropdown";
import styles from "./Navbar.module.css";

const Navbar = () => (
  <div className={styles.navbar}>
    <Link className={styles.logoContainer} to="/">
      <img
        className={styles.logo}
        src="https://www.bloowatch.com/hubfs/Bloowatch_Jan2017/images/bloowatch-logo2.png"
        alt="logo"
      />
    </Link>
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
        {/* <Shopp */}
      </Link>
    </div>
    {/* {hidden ? null : <CartDropdown />} */}
  </div>
);

export default Navbar;
