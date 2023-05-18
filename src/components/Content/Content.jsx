import Movie from "./Movie/Movie";
import News from "./News/News";
import Shop from "./Shop/Shop";
import Weather from "./Weather/Weather";
import styles from "./Content.module.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Content () {
    return(
        <div>
            <div className={styles.content}>
                <div className={styles.News}><News /></div>               
                <div className={styles.Weather}><Weather /></div>
            </div>
            <div className={styles.content}>
                <div className={styles.Movie}><Movie /></div>               
                <div className={styles.Shop}><Shop /></div>
                {/* <BrowserRouter>
                    <Routes>          
                        <Route path="/shop" element={<Shop />}></Route>
                    </Routes>
                </BrowserRouter> */}
            </div>
        </div>
    );
}

export default Content;