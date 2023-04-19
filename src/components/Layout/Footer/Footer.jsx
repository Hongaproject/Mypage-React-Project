import styles from './Footer.module.css';

function Footer () {
    return (
        <div className={styles.footer}>
            <div className={styles.footerF}>
                <ul className={styles.footerFul}>
                    <strong>문의 사항</strong>
                    <li>xxxxxxx@naver.com</li>
                    <li>COPYRIGHT 2023 Honga. All Rights Reserved.</li>
                </ul>
            </div>
            <div className={styles.footerL}>
                <ul className={styles.footerLul}>
                    <li>icon(깃허브)</li>
                    <li>icon(블로그)</li>
                    <li>icon(메일)</li>
                </ul>  
            </div>
        </div>
    );
}
export default Footer;