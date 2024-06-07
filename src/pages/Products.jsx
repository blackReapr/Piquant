import axios from "axios";
import { useState, useEffect } from "react";

// Components
import ProductCard from "../components/Products/ProductCard";
import FirstTopSection from "../components/Helper/FirstTopSection";
import TopRatedProductCard from "../components/Products/TopRatedProductCard";

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
  const [tags, setTags] = useState([]);

  const [filter, setFilter] = useState(filters.latest);

  const handleChange = e => {
    const filterType = e.target.value;
    if (filterType === filters.popularity) {
    }
  };

  useEffect(() => {
    const getTags = async () => {
      const { data } = await axios.get("http://localhost:3000/tags");
      setTags(data);
    };

    const getProducts = async () => {
      const { data } = await axios.get("http://localhost:3000/products");
      setProducts(data);
    };

    const getCategories = async () => {
      const { data } = await axios.get("http://localhost:3000/categories");
      console.log(data);
      setCategories(data);
    };

    getProducts();
    getCategories();
    getTags();
  }, []);

  return (
    <>
      <FirstTopSection title={"SHOP"} />
      <section className="products">
        <div className="container">
          <div className="row">
            <div className="leftSide">
              <div className="productsFilter">
                <p className="resultCount">Showing 1–6 Of 12 Results</p>
                <select onChange={e => handleChange(e)}>
                  <option value={filters.latest}>Sort by latest</option>
                  <option value={filters.popularity}>Sort by popularity</option>
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
                {products.map(item => (
                  <ProductCard
                    key={item.id}
                    image={item.image}
                    title={item.title}
                    price={item.price}
                  />
                ))}
              </div>
            </div>
            <div className="rightSide">
              <div className="categoriesContainer">
                <h3 className="title">Categories</h3>
                <ul className="categoryList">
                  {categories.map(item => (
                    <li className="categoryItem" key={item.id}>
                      {item.name}
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
                      image={item.image}
                      title={item.title}
                      price={item.price}
                    />
                  ))}
                </div>
              </div>
              <div className="tags">
                <h3 className="title">Tags</h3>
                <ul className="tagList">
                  {tags.map(item => (
                    <li key={item.id} className="tagItem">
                      {item.name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
