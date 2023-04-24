import styled from "styled-components";
import NewsItem from "./NewsItem";

const NewsListStyle = styled.div`
    
`;

const exArticle = {
    title: '기사 제목',
    description: '기사 내용',
    url: 'https://github.com/Hongaproject',
    urlToImage: 'https://via.placeholder.com/140',
}

function NewsList () {
    return(
        <NewsListStyle>
            <NewsItem article={exArticle}/>
        </NewsListStyle>
    );
}

export default NewsList;