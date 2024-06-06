import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ArtGalleryImages = ({ images }) => {
  const [itemCount, setItemCount] = useState(4);

  useEffect(() => {
    const onChange = () => {
      if (window.innerWidth >= 980) {
        setItemCount(4);
      } else if (window.innerWidth < 495) {
        setItemCount(1);
      } else if (window.innerWidth < 768) {
        setItemCount(2);
      } else if (window.innerWidth < 980) {
        setItemCount(3);
      }
    };
    onChange();
    window.addEventListener("resize", onChange);

    return () => window.removeEventListener("ressize", onChange);
  }, []);

  return (
    <div
      className={`galleryImagesBox ${
        itemCount === 3
          ? "mediumScreen"
          : itemCount === 2
          ? "smallScreen"
          : itemCount === 1
          ? "smallerScreen"
          : ""
      }`}>
      {images.slice(0, itemCount).map((item, index) => (
        <Link to="/" className="galleryImage" key={index}>
          <img src={item.image} alt="" />
          <h3 className="title">{item.title}</h3>
        </Link>
      ))}
    </div>
  );
};

export default ArtGalleryImages;
