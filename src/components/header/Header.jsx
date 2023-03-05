import React from "react";
import styles from "./Header.module.css";

const Header = ({ title }) => {
  return (
    <section className={styles.container}>
      <h1 className={styles.container__title}>{title}</h1>
    </section>
  );
};

export default Header;
