import styles from "./Shop.module.css";


function Shop () {
    return(
        <div className={styles.shopMain}>
            <ul>
                <li>무신사</li>
                <li>쇼핑</li>
                <li>크림</li>
                <li>룩핀</li>
            </ul>
        </div>
    );
}

export default Shop;