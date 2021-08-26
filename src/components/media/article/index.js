import React from "react";

export const Articles = ({ articles, content, heading }) => {
  return (
    <div className="p-3 m-3 border border-2 border-secondary w-100">
      <h5 className="text-primary">{heading}</h5>
      <div className="d-flex flex-wrap">
        {articles &&
          articles.map((article, index) => (
            <div key={index} className="m-2">
              <img
                className="img-fluid rounded"
                src={article.image}
                alt={article.imageAlt}
              />
              <p className="mt-2">{article.content.substring(0, 200)}</p>
              {article.content.length > 200 && (
                <span className="float-end">Learn More...</span>
              )}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Articles;
