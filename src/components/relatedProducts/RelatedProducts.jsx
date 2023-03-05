import React from "react";
import filledStar from "../../assets/imgs/list/filled-star.svg";
import emptyStar from "../../assets/imgs/list/empty-star.svg";

import styles from "./RelatedProducts.module.css";

const RelatedProducts = ({ stars, title, image }) => {
  return (
    <div className={styles.container}>
      <div className={styles.container__product__image}>
        <img src={image} alt={title} />
      </div>
      <div className={styles.container__product__info}>
        <div className={styles.container__product__title}>{title}</div>
        <div className={styles.container__product__rating}>
          <div className={styles.container__product__rating__stars}>
            {Array(stars)
              .fill()
              .map((_, i) => (
                <span>
                  <img src={filledStar} alt="star" />
                </span>
              ))}
            {stars < 5 &&
              Array(5 - stars)
                .fill()
                .map((_, i) => (
                  <span>
                    <img src={emptyStar} alt="star" />
                  </span>
                ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RelatedProducts;
