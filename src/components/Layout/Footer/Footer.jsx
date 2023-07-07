import styles from './Footer.module.css';

function Footer () {
    return (
        <div className={styles.footer}>
            <div className={styles.footerF}>
                <ul className={styles.footerFul}>
                    <li>COPYRIGHT 2023 HSW. All Rights Reserved.</li>
                </ul>
            </div>
            <div className={styles.footerL}>
                <ul className={styles.footerLul}>
                    <li><a href="https://github.com/Hongaproject" target='_black'><img src="/github.png" alt="github" /></a></li>
                    <li><a href="https://honggacoding.tistory.com/" target='_black'><img src="/t.png" alt="github" /></a></li>
                    <li><a href="mailto:tkwlscjq13@naver.com" target='_black'><img src="/email.png" alt="github" /></a></li>
                </ul>  
            </div>
        </div>
    );
}
export default Footer;