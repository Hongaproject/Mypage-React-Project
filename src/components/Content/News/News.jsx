import { useState } from "react";
import NewsList from "./NewsList";
import { useEffect } from "react";
import styles from "./News.module.css";

function News () {
    
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false);
        },300);
    }, [])

    return(
        <div className={styles.newsMain}>
            <h2 className={styles.title} title="이미지를 클릭해 주세요">오늘의 뉴스</h2>
            { loading ? 'loading...' : <NewsList /> }
        </div>
    );
}

export default News;