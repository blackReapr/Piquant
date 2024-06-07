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

const filters = {
  latest: 0,
  popularity: 1,
  averageRaiting: 2,
  lowToHigh: 3,
  highToLow: 4,
};

// /todos?_sort=createTime&_order=desc

const Products = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [sliderValues, setSliderValues] = useState([0, 60]);

  const [filter, setFilter] = useState(filters.latest);

  const handleChange = (e) => {
    const filterType = Number(e.target.value);
    if (filterType === filters.lowToHigh) {
      const newProducts = [...products];
      newProducts.sort((x, y) => x.price - y.price);
      setProducts(newProducts);
    } else if (filterType === filters.highToLow) {
      const newProducts = [...products];
      newProducts.sort((x, y) => y.price - x.price);
      setProducts(newProducts);
    }
  };

  const handleFilter = async () => {
    const [minValue, maxValue] = sliderValues;
    const { data } = await axios.get("http://localhost:3000/products", {
      params: {
        price_gte: minValue,
        price_lte: maxValue,
      },
    });
    setProducts(data);
  };

  useEffect(() => {
    const getProducts = async () => {
      const { data } = await axios.get("http://localhost:3000/products");
      setProducts(data);
    };

    const getCategories = async () => {
      const { data } = await axios.get("http://localhost:3000/categories");
      setCategories(data);
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
                      Showing {products.length} Results
                    </p>
                    <select onChange={(e) => handleChange(e)}>
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
                    {products.map((item) => (
                      <ProductCard
                        key={item.id}
                        id={item.id}
                        image={item.image}
                        title={item.title}
                        price={item.price}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
            <div className="rightSide">
              <div className="categoriesContainer">
                <h3 className="title">Categories</h3>
                <ul className="categoryList">
                  {categories.map((item) => (
                    <li className="categoryItem" key={item.id}>
                      {item.name}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="topRatedProducts">
                <h3 className="title">top rated products</h3>
                <div className="topRatedProductsBox">
                  {products.slice(0, 3).map((item) => (
                    <TopRatedProductCard
                      key={item.id}
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
                  onInput={(e) => setSliderValues(e)}
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
