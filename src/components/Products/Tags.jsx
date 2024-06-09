import axios from "axios";
import { useState, useEffect } from "react";

const Tags = () => {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    const getTags = async () => {
      const {
        data: { tags },
      } = await axios.get("http://localhost:5000/api/tags");
      setTags(tags);
    };
    getTags();
  }, []);

  return (
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
  );
};

export default Tags;
