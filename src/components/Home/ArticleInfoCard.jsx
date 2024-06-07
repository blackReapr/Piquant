const ArticleInfoCard = ({ image, title, info }) => {
  return (
    <div className="card">
      <div className="imageContainer">
        <img src={image} alt="" />
      </div>
      <h4 className="title">{title}</h4>
      <p className="info">{info}</p>
    </div>
  );
};

export default ArticleInfoCard;
