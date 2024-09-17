import React from "react";

const Home = ({ newsData }) => {
  const u=newsData?newsData:0;
  console.log("News data in Home:", u); 
  return (
    <div>
      <h2>Latest News</h2>
      <div>
        {newsData && newsData.articles.length > 0 ? (
          newsData.articles.map((articles, i) => (
            <div key={i} className="p-5">
              <h3>{articles.title}</h3>
              <p>{articles.description}</p>
              <a href={articles.url} target="_blank" rel="noopener noreferrer">
                Read more
              </a>
            </div>
          ))
        ) : (
          <p>No news available</p>
        )}
      </div>
    </div>
  );
};

export default Home;
