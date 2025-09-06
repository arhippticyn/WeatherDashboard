import React, { useEffect, useState } from "react";
import axios from "axios";


function News() {
  const [articles, setArticles] = useState([]);         
  const [visibleCount, setVisibleCount] = useState(4);  

  useEffect(() => {
    const loadNews = async () => {
      try {
        const res = await axios.get(
              // `https://newsapi.org/v2/top-headlines?country=us&category=technology&pageSize=20&apiKey=46e7253467cb4ac18355266c08b4ba6b`
        // `https://newsapi.org/v2/everything?domains=wsj.com&apiKey=55ac153777934f5ebd193f14461b6761`
        // `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=55ac153777934f5ebd193f14461b6761`
        // `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=55ac153777934f5ebd193f14461b6761`
        // `https://newsapi.org/v2/everything?q=tesla&from=2025-07-23&sortBy=publishedAt&apiKey=55ac153777934f5ebd193f14461b6761`
        `https://newsapi.org/v2/everything?q=apple&from=2025-08-22&to=2025-08-22&sortBy=popularity&apiKey=55ac153777934f5ebd193f14461b6761`
        // `https://newsapi.org/v2/everything?q=pets&from=2025-08-22&to=2025-08-22&sortBy=popularity&apiKey=55ac153777934f5ebd193f14461b6761`
        );
       setArticles(res.data.articles || []);
      } catch (err) {
        console.error(err);
      }
    };

    loadNews();
  }, []);

  const handleSeeMore = () => {
    setVisibleCount(prev => prev + 4);
  };

  return (
    <div className="news">
      <h2 className="news__title">News</h2>

      <div className="news__scroll">
        {articles.slice(0, visibleCount).map((article, index) => (
          <div key={index} className="news__card">
            {article.urlToImage && (
              <img src={article.urlToImage} alt={article.title} />
            )}
            <p>{article.title}</p>
          </div>
        ))}
      </div>

      
        <div className="news__btn">
          <button className="btn" onClick={handleSeeMore}>
            See more
          </button>
        </div>
      
    </div>
  );
}

export default News;