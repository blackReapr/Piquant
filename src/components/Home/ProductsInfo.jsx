import ProductInfoCard from "./ProductInfoCard";

const ProductsInfo = ({ productsInfo }) => {
  return (
    <section className="productsInfo">
      <div className="container">
        <div className="row">
          <div className="cardBox">
            {productsInfo.map((item, index) => (
              <ProductInfoCard key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsInfo;
