import axios from "axios";
import { useEffect, useState } from "react";
import { IoIosHome } from "react-icons/io";
import { Link, useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(
        `http://localhost:3000/products?id=${id}`
      );
      setProduct(data[0]);
    };
    getData();
  }, []);

  return (
    <>
      <section className="navigationSection">
        <div className="container">
          <div className="row">
            <h4 className="title">SHOP</h4>
            <p className="currentLocation">
              <Link to="/">
                <IoIosHome />
              </Link>
              / {product.title}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetail;
