import React, { useState, useEffect } from 'react';

function Below() {
    const [articles, setArticles] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchNews = async () => {
            const apiKey = process.env.REACT_APP_NEWS_API_KEY;
            const url = `https://newsapi.org/v2/top-headlines?category=technology&language=en&sortBy=publishedAt&pageSize=3&apiKey=${apiKey}`;

            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setArticles(data.articles);
            } catch (err) {
                setError('Failed to display news. Please try again later.');
            }
        };

        fetchNews();
      }, []);

    return (
        <section className="below-section">
            {error ? (
                <h3>{error}</h3>
            ) : (
                articles.map((article, index) => (
                    <a href={article.url} target="_blank" rel="noopener noreferrer" key={index} className="article-container">
                        {article.urlToImage ? (
                            <img src={article.urlToImage} alt={article.title} className="article-image"/>
                        ) : (
                            <div className="placeholder-image">No Image</div>
                        )}
                        <section className='description-container'>
                            <h1>{`0${index + 1}`}</h1>
                            <h3>{article.title}</h3>
                            <p>{article.description ? `${article.description.slice(0, 70)}...` : '...'}</p>
                        </section>
                    </a>
                ))
            )}
        </section>
    );
};

export default Below;