import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import styles from "./Layout.module.css";

function Layout ({children}) {
    return (
        <div>
            <Header />

                <div className={styles.children}>
                    {children}
                </div>

            <Footer />
        </div>
    );
}
export default Layout;