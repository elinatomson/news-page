import React, { useState, useEffect } from 'react';

function Main() {
    const [article, setArticle] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTopArticle = async () => {
            const apiKey = process.env.REACT_APP_NEWS_API_KEY;
            const url = `https://newsapi.org/v2/top-headlines?language=en&pageSize=1&apiKey=${apiKey}`;

            try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
                setArticle(data.articles[0]);
            } catch (err) {
                setError('Failed to display the top article. Please try again later.');
            }
        };

        fetchTopArticle();
    }, []);

    return (
        <section className="main-section">
            {!article ? (
                <h1>Loading...</h1>
            ) : error ? (
                <h1>{error}</h1>
            ) : (
                <article>
                    <img src={article.urlToImage} alt={article.title} className="article-image"/>
                    <section className='article-container'>
                        <h1>{article.title}</h1>
                        <section className='description-container'>
                            <p>{article.description}</p>
                            <a href={article.url} target="_blank" rel="noopener noreferrer" className="article-link">
                                <button>READ MORE</button>
                            </a>
                        </section>
                    </section>
                </article>
            )}
        </section>
    );
};


export default Main;