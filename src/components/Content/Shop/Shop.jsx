// import { useState } from "react";
import styles from "./Shop.module.css";
import { useNavigate } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shopc from "./Shopc";
import { Link } from "react-router-dom";
import Shopm from "./Shopm";

function Shop () {

    // const [move, setMove] = useState(false);

    // const clickShops = () => {
    //     setMove(!move);
    // }

    // const navigate = useNavigate();

    // const clickShopMove = () => {
    //     navigate("/Shopm");
    // }

    // const page = <Shopc />;

    // const clickShops = () => {
    //     // document.location.href = "./Shopc";
    //     window.location.href = "./Shopc";

    // }

    const navigate = useNavigate();

    const clickShopMove = () => {
        navigate("/Shopm");
    }

    return(
        <div className={styles.shopMain}>
            {/* {move ? <Shopc /> : (<button onClick={clickShops}>더보기</button>)} */}
            {/* <BrowserRouter>
                <Routes>          
                    <Route path="/shop" element={<Shopc />}></Route>
                </Routes>
            </BrowserRouter> */}
            {/* <button onClick={()=> {window.open(page)}}>더보기</button>
            <button onClick={clickShops}>더보기</button>
            <Link to="/shopc">모음집</Link> */}
            {/* <Link to="/shop/sub">메인</Link> */}
            {/* <Shopc onClick={clickShops}>더보기</Shopc> */}

            {/* <Link to="/Shpom"><button>서브</button></Link> */}
            <button onClick={clickShopMove}>더보기</button>


        </div>
    );
}

export default Shop;