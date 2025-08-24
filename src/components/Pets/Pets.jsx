import React, { useEffect, useState } from "react";



function Pets() {
  const [articles, setArticles] = useState([]);         
  const [visibleCount, setVisibleCount] = useState(4);  

  useEffect(() => {
    const loadNews = async () => {
      try {
        const res = await fetch(
              // `https://newsapi.org/v2/top-headlines?country=us&category=technology&pageSize=20&apiKey=46e7253467cb4ac18355266c08b4ba6b`
        // `https://newsapi.org/v2/everything?domains=wsj.com&apiKey=55ac153777934f5ebd193f14461b6761`
        // `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=55ac153777934f5ebd193f14461b6761`
        // `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=55ac153777934f5ebd193f14461b6761`
        // `https://newsapi.org/v2/everything?q=tesla&from=2025-07-23&sortBy=publishedAt&apiKey=55ac153777934f5ebd193f14461b6761`
        `https://newsapi.org/v2/everything?q=apple&from=2025-08-22&to=2025-08-22&sortBy=popularity&apiKey=55ac153777934f5ebd193f14461b6761`
        // `https://newsapi.org/v2/everything?q=pets&from=2025-08-22&to=2025-08-22&sortBy=popularity&apiKey=55ac153777934f5ebd193f14461b6761`
        );
        const data = await res.json();
        setArticles(data.articles || []);
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
    <div className="pets">
      <h2 className="pets__title">News</h2>

      <div className="pets__scroll">
        {articles.slice(0, visibleCount).map((article, index) => (
          <div key={index} className="pets__card">
            {article.urlToImage && (
              <img src={article.urlToImage} alt={article.title} />
            )}
            <p>{article.title}</p>
          </div>
        ))}
      </div>

      
        <div className="pets__btn">
          <button className="btn" onClick={handleSeeMore}>
            See more
          </button>
        </div>
      
    </div>
  );
}

export default Pets;