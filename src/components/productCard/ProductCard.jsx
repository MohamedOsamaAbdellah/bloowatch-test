import React from "react";
import styles from "./ProductCard.module.css";

const ProductCard = ({ image, title, category, newPrice, oldPrice }) => {
  return (
    <div className={styles.product_card}>
      {oldPrice && <div className={styles.product_card__discount}>Sale</div>}
      <div className={styles.product_card__image}>
        <img src={image} alt={title} />
      </div>
      <div className={styles.product_card__add_buttons}>
        <div className={styles.product_card__add_button}>Add to cart</div>
        {/* <div className={styles.product_card__increase_decrease}>
          <div className={styles.product_card__increase__button}>+</div>
          <div className={styles.product_card__count}>1</div>
          <div className={styles.product_card__decrease__button}>-</div>
        </div> */}
      </div>
      <div className={styles.product_card__title}>{title}</div>
      <div className={styles.product_card__category}>{category}</div>
      <div className={styles.product_card__prices}>
        <span className={styles.product_card__price_new}>{newPrice}</span>
        <span className={styles.product_card__price_old}>{oldPrice}</span>
      </div>
    </div>
  );
};

export default ProductCard;
