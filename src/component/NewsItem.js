import React from 'react';

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date} = props;

  return (
    <div className="card my-3">
      <img src={imageUrl ? imageUrl : "https://via.placeholder.com/300x200"} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <p className="card-text"><small className="text-muted">By {author ? author : "Unknown"} on {new Date(date).toGMTString()}</small></p>
        <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">Read More</a>
      </div>
    </div>
  );
};

export default NewsItem;
