// import { useState } from "react";
import styles from "./Shop.module.css";
import { useNavigate } from "react-router-dom";


function Shop () {

    const navigate = useNavigate();

    const clickShopMove = () => {
        navigate("/Shopm");
    }

    return(
        <div className={styles.shopMain}>
            쇼핑몰
            <button onClick={clickShopMove}>더보기</button>
        </div>
    );
}

export default Shop;