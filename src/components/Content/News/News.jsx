// import { useState } from "react";
// import styles from "./News.module.css";
// import axios from "axios";

import NewsList from "./NewsList";
function News () {
    // const [news, setNews] = useState(null);

    // const Click = async () => {
    //     try{
    //         const apiKey = process.env.REACT_APP_NEWS_KEY;
    //         const response = await axios.get (`https://newsapi.org/v2/top-headlines?country=kr&apiKey=${apiKey}`);
    //         setNews(response, news);
    //     }
    //     catch(err){
    //         console.log(err);
    //     }
    // }

    return(
        // <div className={styles.newsMain}>
        //     <div>
        //         <div>
        //             <button onClick={Click}>불러오기</button>
        //         </div>
        //         {news && <textarea rows={9} value={JSON.stringify(news, null, 2)} readOnly={true}/>}
        //     </div>
        // </div>
        // <NewsList />
        <div></div>
    );
}

export default News;