import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteFromCart } from "../../store/cart/CartSlice";

import styles from "./ProductCard.module.css";

const ProductCard = ({ image, title, category, newPrice, oldPrice, id }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cartProducts } = useSelector((state) => state.cart);

  return (
    <div className={styles.product_card}>
      {oldPrice && <div className={styles.product_card__discount}>Sale</div>}
      <div
        className={styles.product_card__image}
        onClick={() => navigate(`/products/${id}`)}
      >
        <img src={image} alt={title} />
      </div>
      <div className={styles.product_card__add_buttons}>
        {cartProducts && cartProducts.find((product) => product.id === id) ? (
          <div
            className={styles.product_card__increase_decrease}
            style={{ display: "flex" }}
          >
            <div
              className={styles.product_card__increase__button}
              onClick={() =>
                dispatch(
                  addToCart({ id, title, category, newPrice, oldPrice, image })
                )
              }
            >
              +
            </div>
            <div className={styles.product_card__count}>
              {cartProducts.find((product) => product.id === id)?.quantity}
            </div>
            <div
              className={styles.product_card__decrease__button}
              onClick={() =>
                dispatch(
                  deleteFromCart({
                    id,
                    title,
                    category,
                    newPrice,
                    oldPrice,
                    image,
                  })
                )
              }
            >
              -
            </div>
          </div>
        ) : (
          <div
            className={styles.product_card__add_to_cart__button}
            onClick={() =>
              dispatch(
                addToCart({ id, title, category, newPrice, oldPrice, image })
              )
            }
          >
            Add to cart
          </div>
        )}
      </div>
      <div
        className={styles.product_card__title}
        onClick={() => navigate(`/products/${id}`)}
      >
        {title}
      </div>
      <div className={styles.product_card__category}>{category}</div>
      <div className={styles.product_card__prices}>
        <span className={styles.product_card__price_new}>{newPrice}</span>
        <span className={styles.product_card__price_old}>{oldPrice}</span>
      </div>
    </div>
  );
};

export default ProductCard;
