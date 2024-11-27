import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function New() {
    const [articles, setArticles] = useState([]);
    const [error, setError] = useState(null);
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    useEffect(() => {
        const fetchNews = async () => {
            const apiKey = process.env.REACT_APP_NEWS_API_KEY;
            const url = `https://newsapi.org/v2/everything?q=*&language=en&sortBy=publishedAt&pageSize=9&q=-dealcatcher&apiKey=${apiKey}`;

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
        <>
            <h2 id="new">New</h2>
            <section className="new-section">
                <Slider {...settings}>
                    {error ? (
                        <h3>{error}</h3>
                    ) : (
                        articles.map((article, index) => (
                            <article key={index} className='new-article'>
                                <a href={article.url} target="_blank" rel="noopener noreferrer" >
                                    {article.urlToImage ? (
                                        <img src={article.urlToImage} alt={article.title}/>
                                    ) : (
                                        <div className="placeholder-image">No Image</div>
                                    )}
                                    <h3>{article.title}</h3>
                                </a>
                            </article>
                        ))
                    )}
                </Slider>
            </section>
        </>
    );
};

export default New;