import styles from "./Shop.module.css";
import { useNavigate } from "react-router-dom";


function Shop () {

    const navigate = useNavigate();

    const clickShopMove = () => {
        navigate("/Shopm");
    }

    return(
        <div className={styles.shopMain}>
            <div className={styles.shopSub}>
                <h3>쇼핑몰</h3>
                <div>
                    <a href="https://www.musinsa.com/" target="_blank"><img src="/musinsaT.png" alt="photo" /></a>
                    <a href="https://kream.co.kr/" target="_blank"><img src="/kreamT.png" alt="photo" /></a>
                </div>
                <button className={styles.btn1} onClick={clickShopMove}>더 많은 쇼핑몰 알아보기</button> <br />

                <h3>먹거리 및 생필품</h3>
                <div>
                    <a href="https://www.tmon.co.kr/" target="_blank"><img src="/tmonT.png" alt="photo" /></a>
                    <a href="https://www.coupang.com/" target="_blank"><img src="/coupangT.png" alt="photo" /></a>               
                </div>
                <button onClick={()=> window.open("https://shopping.naver.com/home")} className={styles.btn2}>최저가 비교하기</button> <br />

                <h3>여행</h3>
                <div>
                    <a href="https://korean.visitkorea.or.kr/" target="_blank"><img src="/travelT.png" alt="photo" /></a>
                    <a href="https://www.agoda.com/ko-kr/" target="_blank"><img src="/agoda.png" alt="photo" /></a>
                </div>
            </div>
            {/* <h3>쇼핑몰</h3>
            <div>
                <a href=""><img src="/musinsaT.png" alt="photo" /></a>
                <a href=""><img src="/kreamT.png" alt="photo" /></a>
            </div>
            <button className={styles.btn1} onClick={clickShopMove}>더 많은 쇼핑몰 알아보기</button> <br />

            <h3>먹거리 및 생필품</h3>
            <div>
                <a href=""><img src="/tmonT.png" alt="photo" /></a>
                <a href=""><img src="/coupangT.png" alt="photo" /></a>               
            </div>
            <button onClick={()=> window.open("https://shopping.naver.com/home")} className={styles.btn2}>최저가 비교하기</button> <br />
            <h3>여행</h3>
            <div>
                <a href="#"><img src="/travelT.png" alt="photo" /></a>
            </div>
             */}
        </div>
    );
}

export default Shop;