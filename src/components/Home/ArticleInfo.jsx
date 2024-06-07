import ArticleInfoCard from "./ArticleInfoCard";

const ArticleInfo = ({ productsInfo }) => {
  return (
    <section className="productsInfo">
      <div className="container">
        <div className="row">
          <div className="cardBox">
            {productsInfo.map((item, index) => (
              <ArticleInfoCard key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArticleInfo;
