import React, { useState, useEffect } from 'react';

function Aside() {
    const [articles, setArticles] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchNews = async () => {
            const apiKey = process.env.REACT_APP_NEWS_API_KEY;
            const url = `https://newsapi.org/v2/everything?q=*&language=en&sortBy=publishedAt&pageSize=3&apiKey=${apiKey}`;

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
        <section className="aside-section">
            <h2>New</h2>
            {error ? (
                <h3>{error}</h3>
            ) : (
                articles.map((article, index) => (
                    <a href={article.url} target="_blank" rel="noopener noreferrer" key={index} className="aside-article">
                        <h3>{article.title}</h3>
                        <p>{article.description ? `${article.description.slice(0, 100)}...` : '...'}</p>
                    </a>
                ))
            )}
        </section>
    );
};

export default Aside;