import styled from "styled-components";
import NewsItem from "./NewsItem";
import axios from "axios";
import { useState, useEffect } from "react";

const NewsListStyle = styled.div`
    box-sizing: border-box;
    padding-bottom: 3rem;
    width: 768px;
    margin: 0 auto;
`;

function NewsList () {

    const [articles, setArticles] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try{
                const apiKey = process.env.REACT_APP_NEWS_KEY;
                const response =  await axios.get(`https://newsapi.org/v2/top-headlines?country=kr&apiKey=${apiKey}`);
                setArticles(response.data.articles);
                console.log(response);
            }
            catch(err){
                console.log(err);
            }
        }

        fetchData();
    }, []);

    if (!articles) {
        return null;
    }

    return(
            <NewsListStyle>
                {articles.slice(0,5).map((article, id) => {
                    return(
                        <div key={id}>
                            <NewsItem Key={article.id} article={article}/>
                        </div>
                    );
                })}
            </NewsListStyle>
    );
}

export default NewsList;