import { Link } from "react-router-dom";
import { FaHandPointRight } from "react-icons/fa";
import { useEffect, useState } from "react";

// Foods Images
import FoodImage1 from "../../assets/images/categories/foods/A-Treat-For-Your-Taste-Buds.jpg";
import FoodImage2 from "../../assets/images/categories/foods/Carne-Asada-Tacos.jpg";
import FoodImage3 from "../../assets/images/categories/foods/Mango-Chile-Chutney.jpg";
import FoodImage4 from "../../assets/images/categories/foods/Wasabi-Wednesday.jpg";

// Interior Images
import InteriorImage1 from "../../assets/images/categories/interior/A-Treat-For-Your-Taste-Buds.jpg";
import InteriorImage2 from "../../assets/images/categories/interior/Shrimp-Curry.jpg";
import InteriorImage3 from "../../assets/images/categories/interior/Kung-Pao-Pastrami.jpg";
import InteriorImage4 from "../../assets/images/categories/interior/Mango-Chile-Chutney.jpg";

// Deserts Images
import DesrtImage1 from "../../assets/images/categories/deserts/Shrimp-Curry.jpg";
import DesrtImage2 from "../../assets/images/categories/deserts/Kung-Pao-Pastrami.jpg";
import DesrtImage3 from "../../assets/images/categories/deserts/Burger-Banquet.jpg";
import DesrtImage4 from "../../assets/images/categories/deserts/Berliner-Weisse.jpg";

// Recipes Images
import RecipeImage1 from "../../assets/images/categories/recipes/Carne-Adovada.jpg";
import RecipeImage2 from "../../assets/images/categories/recipes/Berliner-Weisse.jpg";
import RecipeImage3 from "../../assets/images/categories/recipes/Wasabi-Wednesday.jpg";
import RecipeImage4 from "../../assets/images/categories/recipes/Amazing-Interior.jpg";
import ArtGalleryImages from "./ArtGalleryImages";

const categories = {
  foods: 1,
  interior: 2,
  deserts: 3,
  recipes: 4,
};

const categoryItems = {
  foods: {
    images: [
      {
        image: FoodImage1,
        title: "Lorem",
      },
      {
        image: FoodImage2,
        title: "Lorem",
      },
      {
        image: FoodImage3,
        title: "Lorem",
      },
      {
        image: FoodImage4,
        title: "Lorem",
      },
    ],
  },
  interior: {
    images: [
      {
        image: InteriorImage1,
        title: "Lorem",
      },
      {
        image: InteriorImage2,
        title: "Lorem",
      },
      {
        image: InteriorImage3,
        title: "Lorem",
      },
      {
        image: InteriorImage4,
        title: "Lorem",
      },
    ],
  },
  deserts: {
    images: [
      {
        image: DesrtImage1,
        title: "Lorem",
      },
      {
        image: DesrtImage2,
        title: "Lorem",
      },
      {
        image: DesrtImage3,
        title: "Lorem",
      },
      {
        image: DesrtImage4,
        title: "Lorem",
      },
    ],
  },
  recipes: {
    images: [
      {
        image: RecipeImage1,
        title: "Lorem",
      },
      {
        image: RecipeImage2,
        title: "Lorem",
      },
      {
        image: RecipeImage3,
        title: "Lorem",
      },
      {
        image: RecipeImage4,
        title: "Lorem",
      },
    ],
  },
};

const ArtGallery = () => {
  const [category, setCategory] = useState(categories.foods);
  const [categoryImages, setCategoryImages] = useState(
    categoryItems.foods.images
  );

  useEffect(() => {
    if (category === categories.foods) {
      setCategoryImages(categoryItems.foods.images);
    } else if (category === categories.deserts) {
      setCategoryImages(categoryItems.deserts.images);
    } else if (category === categories.interior) {
      setCategoryImages(categoryItems.interior.images);
    } else if (category === categories.recipes) {
      setCategoryImages(categoryItems.recipes.images);
    }
  }, [category]);

  return (
    <section className="artGallery">
      <div className="container">
        <div className="row">
          <div className="leftSide">
            <h5 className="title">Art Gallery</h5>
            <ul className="categoryList">
              <li
                className={`${category === categories.foods ? "active" : ""}`}
                onClick={() => setCategory(categories.foods)}>
                Food & Drinks
              </li>
              <li
                className={`${
                  category === categories.interior ? "active" : ""
                }`}
                onClick={() => setCategory(categories.interior)}>
                Interior
              </li>
              <li
                className={`${category === categories.deserts ? "active" : ""}`}
                onClick={() => setCategory(categories.deserts)}>
                Deserts
              </li>
              <li
                className={`${category === categories.recipes ? "active" : ""}`}
                onClick={() => setCategory(categories.recipes)}>
                Recipes
              </li>
            </ul>
          </div>
          <div className="rightSide">
            <div className="icon">
              <FaHandPointRight />
            </div>
            <Link to="/">See full galery</Link>
          </div>
        </div>
      </div>
      <ArtGalleryImages images={categoryImages} />
    </section>
  );
};

export default ArtGallery;
