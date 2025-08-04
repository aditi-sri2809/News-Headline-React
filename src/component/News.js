import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  const updateNews = async () => {
    props.setProgress(10);
    // Removed country param to allow global sports news
    const url = `https://newsapi.org/v2/top-headlines?category=${props.category}&apiKey=${props.apiKey}&page=1&pageSize=${props.pageSize}`;

    setLoading(true);
    let data = await fetch(url);
    let parsedData = await data.json();
    props.setProgress(70);
    setArticles(parsedData.articles);
    setLoading(false);
    props.setProgress(100);

    console.log("✅ URL used:", url);
    console.log("✅ API response:", parsedData);
  };

  useEffect(() => {
    updateNews();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="container my-3">
      <h2 className="text-center" style={{ marginTop: "80px" }}>
        NewsMonkey - Top {props.category.charAt(0).toUpperCase() + props.category.slice(1)} Headlines
      </h2>
      {loading && <Spinner />}
      <div className="row">
        {!loading && articles.map((element) => {
          return (
            <div className="col-md-4" key={element.url}>
              <NewsItem
                title={element.title || ""}
                description={element.description || ""}
                imageUrl={element.urlToImage}
                newsUrl={element.url}
                author={element.author}
                date={element.publishedAt}
                source={element.source.name}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default News;
