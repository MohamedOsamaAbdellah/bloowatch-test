import React from "react";

import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.footer__container__links}>
          <div className={styles.footer__container__links__column}>
            <div className={styles.footer__container__links__column__title}>
              About us
            </div>
            <p className={styles.footer__container__links__column__text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              tincidunt, nisl eget aliquam tincidunt, nisl elit aliquam tortor,
              eget aliquam nisl nisl eget nisl. Sed tincidunt, nisl
            </p>
          </div>
          <div className={styles.footer__container__links__column}>
            <div className={styles.footer__container__links__column__title}>
              Contact Us
            </div>
            <div className={styles.footer__container__links__column__link}>
              156-677-124-442-2887
            </div>
            <div className={styles.footer__container__links__column__link}>
              wave@bloowatch.com
            </div>
            <div className={styles.footer__container__links__column__link}>
              spain
            </div>
          </div>
          <div className={styles.footer__container__links__column}>
            <div className={styles.footer__container__links__column__title}>
              Usefull Links
            </div>
            <div className={styles.footer__container__links__column__link}>
              About us
            </div>
            <div className={styles.footer__container__links__column__link}>
              History
            </div>
            <div className={styles.footer__container__links__column__link}>
              Contact us
            </div>
          </div>
        </div>
        <div className={styles.footer__container__social}>
          <div className={styles.footer__container__links__column__title}>
            Instagram
          </div>
          <div className={styles.footer__container__social__instagram}>
            <img
              src="https://www.bloowatch.com/wp-content/uploads/2020/05/instagram-1.png"
              alt="instagram"
            />
            <img
              src="https://www.bloowatch.com/wp-content/uploads/2020/05/instagram-2.png"
              alt="instagram"
            />
            <img
              src="https://www.bloowatch.com/wp-content/uploads/2020/05/instagram-3.png"
              alt="instagram"
            />
            <img
              src="https://www.bloowatch.com/wp-content/uploads/2020/05/instagram-4.png"
              alt="instagram"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
