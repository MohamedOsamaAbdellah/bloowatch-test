import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/header/Header";

import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

import ProductCard from "../../components/productCard/ProductCard";
import product1 from "../../assets/imgs/list/Bitmap copy 2.png";
import product2 from "../../assets/imgs/list/Bitmap copy.png";
import product3 from "../../assets/imgs/list/Bitmap-1 copy.png";
import sampleProduct from "../../assets/imgs/list/Bitmap.png";
import product4 from "../../assets/imgs/list/Group 6.png";

import styles from "./ProductsList.module.css";
// import { useDebounce } from "../../hooks/useDebounce";
import {
  searchProducts,
  sortAtoZ,
  sortByPriceHighToLow,
  sortByPriceLowToHigh,
  sortZtoA,
} from "../../store/products/ProductsSlice";
import RelatedProducts from "../../components/relatedProducts/RelatedProducts";
import { Skeleton } from "@mui/material";

const ProductsList = () => {
  const productsArray = [
    {
      id: 1,
      title: "LIGHTWAVE BOARD",
      newPrice: 100,
      oldPrice: 200,
      category: "Surfing",
      image: product1,
    },
    {
      id: 2,
      title: "SCUBA BOARD",
      newPrice: 150,
      oldPrice: null,
      category: "Surfing",
      image: product2,
    },
    {
      id: 3,
      title: "SURFBOARD",
      newPrice: 200,
      oldPrice: null,
      category: "Surfing",
      image: product3,
    },
    {
      id: 4,
      title: "WAKEBOARD",
      newPrice: 250,
      oldPrice: 350,
      category: "Surfing",
      image: product4,
    },
    {
      id: 5,
      title: "KITEBOARD",
      newPrice: 300,
      oldPrice: null,
      category: "Surfing",
      image: product2,
    },
    {
      id: 6,
      title: "WINDSURF BOARD",
      newPrice: 350,
      oldPrice: 450,
      category: "Surfing",
      image: product1,
    },
  ];
  const categories = [
    "Surfing",
    "Windsurfing",
    "Kiteboarding",
    "Wakeboarding",
    "Stand Up Paddle",
    "Scuba Diving",
  ];
  const related_products = [
    {
      id: 1,
      title: "LIGHTWAVE BOARD",
      image: product1,
      stars: 4,
    },
    {
      id: 2,
      title: "SCUBA BOARD",
      image: product2,
      stars: 5,
    },
    {
      id: 3,
      title: "SURFBOARD",
      image: product3,
      stars: 3,
    },
  ];
  const dispatch = useDispatch();
  const { products, filteredProducts, enableFilter, is_loading } = useSelector(
    (state) => state.products
  );
  const [productsToShow, setProductsToShow] = useState(productsArray);

  const currency = "$";

  useEffect(() => {
    dispatch({ type: "products/setProducts", payload: productsArray });
  }, []);

  // Search Filter

  // when the user types in the search box , the value that is stored is the old value, so we need to use the useDebounce hook to delay the search

  const handleSearchFilter = (event) => {
    dispatch(searchProducts(event.target.value));
  };

  // Price Filter
  const [minPrice, setMinPrice] = useState(
    Math.min(...productsArray.map((product) => product.newPrice))
  );

  const [maxPrice, setMaxPrice] = useState(
    Math.max(...productsArray.map((product) => product.newPrice))
  );

  const [value, setValue] = useState([
    Math.min(...productsArray.map((product) => product.newPrice)),
    Math.max(...productsArray.map((product) => product.newPrice)),
  ]);

  const handlePriceFilter = (newValue) => {
    setValue(newValue);
    setMinPrice(newValue[0]);
    setMaxPrice(newValue[1]);
  };

  useEffect(() => {
    if (enableFilter) {
      setProductsToShow(filteredProducts);
    } else {
      setProductsToShow(products);
    }
  }, [filteredProducts, products, enableFilter]);

  return (
    <>
      <Header title={"SURFING"} />
      <div className={styles.container}>
        <div className={styles.products}>
          <div className={styles.products_grid__sorting_results}>
            <div className={styles.products_grid__results_indicator}>
              Showing 1–6 of 12 results
            </div>

            <select
              name="sorting"
              id="sorting"
              className={styles.products_sorting}
              onChange={(e) => {
                if (e.target.value === "default") {
                  dispatch({
                    type: "products/setProducts",
                    payload: productsArray,
                  });
                } else if (e.target.value === "low-high") {
                  dispatch(sortByPriceLowToHigh());
                } else if (e.target.value === "high-low") {
                  dispatch(sortByPriceHighToLow());
                } else if (e.target.value === "a-z") {
                  dispatch(sortAtoZ());
                } else if (e.target.value === "z-a") {
                  dispatch(sortZtoA());
                }
              }}
            >
              <option value="default">Default Sorting</option>
              <option value="low-high">Low to High</option>
              <option value="high-low">High to Low</option>
              <option value="a-z">A to Z</option>
              <option value="z-a">Z to A</option>
            </select>
          </div>
          <div className={styles.products_grid}>
            {is_loading
              ? [1, 2, 3, 4, 5, 6].map((i) => (
                  <Skeleton
                    key={i}
                    variant="rectangular"
                    width={window.innerWidth > 600 ? 150 : 100}
                    height={window.innerWidth > 600 ? 300 : 200}
                    sx={{ borderRadius: "20px", marginBottom: "20px" }}
                  />
                ))
              : productsToShow?.map((product) => (
                  <ProductCard
                    key={product.id}
                    id={product.id}
                    title={product.title}
                    newPrice={
                      product.newPrice &&
                      `${currency}${product.newPrice.toFixed(2)}`
                    }
                    oldPrice={
                      product.oldPrice &&
                      `${currency}${product.oldPrice.toFixed(2)}`
                    }
                    category={product.category}
                    image={product.image}
                  />
                ))}
          </div>
        </div>
        <div className={styles.products_filters}>
          <div className={styles.products_label}>
            <div className={styles.products_label__title}>Search</div>
            <input
              placeholder="Search for a product"
              type="text"
              name="search"
              id="search"
              onChange={(e) => handleSearchFilter(e)}
            />
          </div>
          <div className={styles.products_label}>
            <label htmlFor="price" className={styles.products_label__title}>
              PRICE
            </label>
            <Box sx={{ width: 170 }}>
              <Slider
                getAriaLabel={() => "Price range"}
                value={value}
                onChange={handlePriceFilter}
                valueLabelDisplay="auto"
                getAriaValueText={(value) => `$${value}`}
                min={productsArray.reduce(
                  (min, p) => (p.newPrice < min ? p.newPrice : min),
                  productsArray[0]?.newPrice
                )}
                max={productsArray.reduce(
                  (max, p) => (p.newPrice > max ? p.newPrice : max),
                  productsArray[0]?.newPrice
                )}
                sx={{
                  color: "#0c0eb7",
                  "& .MuiSlider-thumb": {
                    color: "#0c0eb7",
                    width: 10,
                    height: 10,
                    "&:hover": {
                      boxShadow: "0px 0px 0px 8px rgba(0,0,0,0.16)",
                    },
                  },
                  "& .MuiSlider-track": {
                    color: "#0c0eb7",
                    height: 2,
                    width: "80%",
                  },
                  "& .MuiSlider-rail": {
                    color: "#0c0eb7",
                    height: 2,
                  },
                }}
              />
            </Box>
            <div className={styles.products_priceSorting__indicator}>
              <div className={styles.products_priceSorting_values}>
                PRICE: ${value[0]} - ${value[1]}
              </div>
              <div
                className={styles.products_priceSorting_apply}
                onClick={() => {
                  dispatch({
                    type: "products/priceFilter",
                    payload: { min: minPrice, max: maxPrice },
                  });
                }}
              >
                APPLY
              </div>
            </div>
          </div>
          <div className={styles.products_label}>
            <div htmlFor="categories" className={styles.products_label__title}>
              Categories
            </div>
            {categories.map((category, index) => (
              <div key={index} className={styles.products_category}>
                {category}
              </div>
            ))}
          </div>
          <div className={styles.products_label}>
            <div
              htmlFor="related-products"
              className={styles.products_label__title}
            >
              RELATED PRODUCTS
            </div>
            {related_products.map((product) => (
              <RelatedProducts
                key={product.id}
                title={product.title}
                image={product.image}
                stars={product.stars}
              />
            ))}
          </div>
          <div className={styles.products_label}>
            <img
              src={sampleProduct}
              alt="sample product"
              width="100%"
              height={170}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsList;
