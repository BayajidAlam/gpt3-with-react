import React from "react";
import './Article.css';

const Article = ({ImageUrl, date, title}) => {
  return <div className="gpt3__blog-container_article">
      <div className="gpt3__blog-container_article">
        <img src={ImageUrl} alt="blog image" />
      </div>
  </div>;
};

export default Article;
