const FirstTopSection = ({ title }) => {
  return (
    <section className="firstTopSection">
      <div className="container">
        <div className="row">
          <h2 className="title">{title}</h2>
          <p className="info">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore
          </p>
        </div>
      </div>
    </section>
  );
};

export default FirstTopSection;
