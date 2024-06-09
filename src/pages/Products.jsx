import axios from "axios";
import { useState, useEffect } from "react";

// Components
import ProductCard from "../components/Products/ProductCard";
import FirstTopSection from "../components/Helper/FirstTopSection";
import TopRatedProductCard from "../components/Products/TopRatedProductCard";
import Tags from "../components/Products/Tags";

// Range Slider
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";

// Icons
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const filters = {
  latest: 0,
  popularity: 1,
  averageRaiting: 2,
  lowToHigh: 3,
  highToLow: 4,
};

const PRODUCT_PER_PAGE = 6;

const Products = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [sliderValues, setSliderValues] = useState([0, 60]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (products.length > PRODUCT_PER_PAGE) {
      setPage(1);
    } else {
      setPage(0);
    }
  }, [products]);

  const handleCategoryChange = async id => {
    const {
      data: { products },
    } = await axios.get("http://localhost:5000/api/products", {
      params: {
        categoryId: id,
      },
    });
    setProducts(products);
  };

  const handleChange = e => {
    const filterType = Number(e.target.value);
    if (filterType === filters.lowToHigh) {
      const newProducts = [...products];
      newProducts.sort((x, y) => x.price - y.price);
      setProducts(newProducts);
    } else if (filterType === filters.highToLow) {
      const newProducts = [...products];
      newProducts.sort((x, y) => y.price - x.price);
      setProducts(newProducts);
    } else if (filterType === filters.popularity) {
      const newProducts = [...products];
      newProducts.sort((x, y) => y._count.reviews - x._count.reviews);
      setProducts(newProducts);
    } else if (filterType === filters.averageRaiting) {
      const newProducts = [...products];
      newProducts.sort((x, y) => y.averageRaiting - x.averageRaiting);
      setProducts(newProducts);
    } else if (filterType === filters.latest) {
      const newProducts = [...products];
      newProducts.sort((x, y) => y.createdAt - x.createdAt);
      setProducts(newProducts);
    }
  };

  const handleFilter = async () => {
    const [minValue, maxValue] = sliderValues;
    const {
      data: { products },
    } = await axios.get("http://localhost:5000/api/products", {
      params: {
        minValue,
        maxValue,
      },
    });
    setProducts(products);
  };

  useEffect(() => {
    const getProducts = async () => {
      const {
        data: { products },
      } = await axios.get("http://localhost:5000/api/products");
      setProducts(products);
    };

    const getCategories = async () => {
      const {
        data: { categories },
      } = await axios.get("http://localhost:5000/api/categories");
      setCategories(categories);
    };

    getProducts();
    getCategories();
  }, []);

  return (
    <>
      <FirstTopSection title={"SHOP"} />
      <section className="products">
        <div className="container">
          <div className="row">
            <div className="leftSide">
              {products.length === 0 ? (
                <p className="noProductFound">
                  No products were found matching your selection.
                </p>
              ) : (
                <>
                  <div className="productsFilter">
                    <p className="resultCount">
                      Showing{" "}
                      {page === 0
                        ? "All"
                        : page === 1
                        ? "1–6 Of"
                        : `7-${products.length} Of`}{" "}
                      {products.length} Results
                    </p>
                    <select onChange={e => handleChange(e)}>
                      <option value={filters.latest}>Sort by latest</option>
                      <option value={filters.popularity}>
                        Sort by popularity
                      </option>
                      <option value={filters.averageRaiting}>
                        Sort by average raiting
                      </option>
                      <option value={filters.lowToHigh}>
                        Sort by price: low to high
                      </option>
                      <option value={filters.highToLow}>
                        Sort by price: high to low
                      </option>
                    </select>
                  </div>
                  <div className="productsBox">
                    {products
                      .slice(
                        page === 0 || page === 1 ? 0 : 6,
                        page === 1 ? 6 : products.length
                      )
                      .map(item => (
                        <ProductCard
                          key={item.id}
                          id={item.id}
                          image={item.image}
                          title={item.title}
                          price={item.price}
                        />
                      ))}
                  </div>
                  {page !== 0 ? (
                    <div className="pagination">
                      <FaArrowLeft
                        onClick={() => setPage(1)}
                        className={`${page === 1 ? "" : "active"}`}
                      />
                      <span
                        className={`${page === 1 ? "active" : ""}`}
                        onClick={() => setPage(1)}
                      >
                        1
                      </span>
                      <span
                        className={`${page === 2 ? "active" : ""}`}
                        onClick={() => setPage(2)}
                      >
                        2
                      </span>
                      <FaArrowRight
                        onClick={() => setPage(2)}
                        className={`${page === 2 ? "" : "active"}`}
                      />
                    </div>
                  ) : (
                    ""
                  )}
                </>
              )}
            </div>
            <div className="rightSide">
              <div className="categoriesContainer">
                <h3 className="title">Categories</h3>
                <ul className="categoryList">
                  {categories.map(item => (
                    <li
                      className="categoryItem"
                      key={item.id}
                      onClick={() => handleCategoryChange(item.id)}
                    >
                      {item.name}
                      <span>({item._count.products})</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="topRatedProducts">
                <h3 className="title">top rated products</h3>
                <div className="topRatedProductsBox">
                  {products.slice(0, 3).map(item => (
                    <TopRatedProductCard
                      key={item.id}
                      id={item.id}
                      image={item.image}
                      title={item.title}
                      price={item.price}
                    />
                  ))}
                </div>
              </div>
              <Tags />
              <div className="filterByPrice">
                <h3 className="title">Filter by price</h3>
                <RangeSlider
                  value={sliderValues}
                  onInput={e => setSliderValues(e)}
                  step={10}
                  min={10}
                  max={60}
                  rangeSlideDisabled={true}
                />
                <div className="bottomSide">
                  <p className="priceInfo">
                    Price: £{sliderValues[0]} - £{sliderValues[1]}
                  </p>
                  <button className="filterBtn" onClick={handleFilter}>
                    filter
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
