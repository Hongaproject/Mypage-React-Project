// import { useState } from "react";
import styles from "./Shop.module.css";
// import { useNavigate } from "react-router";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shopc from "./Shopc";

function Shop () {

    // const [move, setMove] = useState(false);

    // const clickShops = () => {
    //     setMove(!move);
    // }

    // const navigate = useNavigate();

    // const clickShops = () => {
    //     navigate("/Shopc");
    // }

    // const clickShops = () => {
    //     // document.location.href = "./Shopc";
    //     window.location.href = "./Shopc";

    // }

    return(
        <div className={styles.shopMain}>
            {/* {move ? <Shopc /> : (<button onClick={clickShops}>더보기</button>)} */}
            {/* <BrowserRouter>
                <Routes>          
                    <Route path="/shop" element={<Shopc />}></Route>
                </Routes>
            </BrowserRouter> */}
            {/* <button onClick={clickShops}>더보기</button> */}
        </div>
    );
}

export default Shop;