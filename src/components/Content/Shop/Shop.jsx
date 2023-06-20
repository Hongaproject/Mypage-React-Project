import styles from "./Shop.module.css";
import { useNavigate } from "react-router-dom";


function Shop () {

    const navigate = useNavigate();

    const clickShopMove = () => {
        navigate("/Shopm");
    }

    return(
        <div>
            쇼핑몰 
            <div>
                <img src="/musinsa.png" alt="photo" />
                <img src="/kream.png" alt="photo" />
            </div>
            <br />
            <button onClick={clickShopMove}>더 많은 쇼핑몰 알아보기</button>
        </div>
    );
}

export default Shop;