import React, { useState } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/header/Header";

import product1 from "../../assets/imgs/list/Bitmap copy 2.png";
import product2 from "../../assets/imgs/list/Bitmap copy.png";
import product3 from "../../assets/imgs/list/Bitmap-1 copy.png";
import sampleProduct from "../../assets/imgs/list/Bitmap.png";
import product4 from "../../assets/imgs/list/Group 6.png";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import styles from "./ProductDetails.module.css";
import { addToCart, deleteFromCart } from "../../store/cart/CartSlice";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const { cartProducts } = useSelector((state) => state.cart);
  const { id } = useParams();
  const { products } = useSelector((state) => state.products);
  const singleProduct = products.find((product) => product.id === Number(id));
  const images = [product1, product2, product3, sampleProduct, product4];

  const [mainImage, setMainImage] = useState(images[0]);

  const handleImageClick = (image) => {
    setMainImage(image);
  };
console.log( cartProducts.find((product) => product.id === id))
  return (
    <>
      <Header
        title={products.find((product) => product.id === Number(id))?.title}
      />
      <div className={styles.product_details}>
        <div className={styles.product_details__images}>
          <div className={styles.image_carousel}>
            <div className={styles.image_list}>
              {images.map((image) => (
                <div key={image} className={styles.image_item}>
                  <img
                    src={image}
                    alt="thumbnail"
                    width="80"
                    height="80"
                    onClick={() => handleImageClick(image)}
                  />
                </div>
              ))}
            </div>
            <div className={styles.main_image}>
              <img src={mainImage} alt="main" width="500" height="500" />
            </div>
          </div>
        </div>
        <div className={styles.product_details__info}>
          <div className={styles.product_details__info__title}>
            {products.find((product) => product.id === Number(id))?.title}
          </div>

          <div className={styles.product_details__info__price}>
            <span className={styles.product_details__info__price__new}>
              {"$" +
                products.find((product) => product.id === Number(id))?.newPrice}
            </span>
            {products.find((product) => product.id === Number(id))
              ?.oldPrice && (
              <span className={styles.product_details__info__price__old}>
                {"$" +
                  products.find((product) => product.id === Number(id))
                    ?.oldPrice}
              </span>
            )}
          </div>
          <div className={styles.product_details__info__description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptas, quod, quia, voluptates quae voluptatibus quibusdam
            accusantium quos quas natus voluptatum. Quisquam, quae. Quisquam
          </div>
          <div className={styles.product_card__add_buttons}>
            {cartProducts &&
            cartProducts.find((product) => product.id === id) ? (
              <div
                className={styles.product_card__increase_decrease}
                style={{ display: "flex" }}
              >
                <div
                  className={styles.product_card__increase__button}
                  onClick={() => dispatch(addToCart(singleProduct))}
                >
                  <ExpandLessIcon />
                </div>
                <div className={styles.product_card__count}>
                  {cartProducts.find((product) => product.id === id)?.quantity}
                </div>
                <div
                  className={styles.product_card__decrease__button}
                  onClick={() => dispatch(deleteFromCart(singleProduct))}
                >
                  <ExpandMoreIcon />
                </div>
              </div>
            ) : (
              <div
                className={styles.product_card__add_to_cart__button}
                onClick={() => dispatch(addToCart(singleProduct))}
              >
                Add to cart
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
