import Movie from "./Movie/Movie";
import News from "./News/News";
import Shop from "./Shop/Shop";
import Weather from "./Weather/Weather";
import styles from "./Content.module.css";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Shopc from "./Shop/Shopc";
import Shopm from "./Shop/Shopm";

function Content () {
    return(
        <div>
            <div className={styles.content}>
                <div className={styles.News}><News /></div>               
                <div className={styles.Weather}><Weather /></div>
            </div>
            <div className={styles.content}>
                <div className={styles.Movie}><Movie /></div>               
                {/* <div className={styles.Shop}><Shop /></div> */}
            <BrowserRouter>
                    <Routes>         
                        <Route path="/" element={<Shop />}/>
                        <Route path="/shpom" element={<Shopm />}/>
                        {/* <Shopm /> */}
                        {/* <Route path="/shop/sub" element={<Shopc />}/> */}
                        {/* <Shopc /> */}
                    </Routes>
            </BrowserRouter>
            </div>
        </div>
    );
}

export default Content;