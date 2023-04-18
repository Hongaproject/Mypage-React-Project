import styles from './Footer.module.css';

function Footer () {
    return (
        <div className={styles.footer}>
            <div className={styles.footerF}>
                first
            </div>
            <div className={styles.footerL}>
                Last
            </div>
        </div>
    );
}
export default Footer;