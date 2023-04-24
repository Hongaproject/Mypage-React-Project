import styled  from "styled-components";

const NewsItemStyle = styled.div`
    display: flex;
    
    .newsurl {
    margin-right: 1rem;
    
    img {
        display: block;
        width: 140px;
        height: 100px;
        object-fit: cover;
    }
    }

    .contents {
    h2 {
        margin: 0;
        
        a {
        color: #000;
        }
    }
    
    p {
        margin: 0;
        line-height: 1.5;
        margin-top: 0.5rem;
        white-space: normal;
    }
    }
`;

function NewsItem ({article}) {

    const {title, description, url, urlToImage} = article;
    
    return(
        <NewsItemStyle>
            {urlToImage && (
                <div className={"newsurl"}>
                    <a href={url} target={"_blank"} rel={"noopener noreferrer"}>
                        <img src={urlToImage} alt={"newsurl"}/>
                    </a>
                </div>
            )}
            <div className={"contents"}>
                <h2>
                    <a href={url} target={"_blank"} rel={"noopener noreferrer"}>
                        {title}
                    </a>
                </h2>
                <p>{description}</p>
            </div>
        </NewsItemStyle>
    );
}

export default NewsItem;