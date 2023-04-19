import styles from './Header.module.css';

function Header () {
    return (
        <div className={styles.header}>
            This Header
            <div className={styles.logoInput}>
                logoInput
                <div className={styles.logo}>
                    Logo
                </div>
                <div className={styles.searchBar}>
                    <form action="">
                        <fieldset className={styles.fieldset}>
                            <div>
                                <input type="text" className={styles.search} required/>
                                <button className={styles.searchBtn}>버튼</button>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </div>
            <div className={styles.sidebar}>
                <ul className={styles.sidebarUl}>
                    <li><button>증권</button></li>
                    <li><button>지도</button></li>
                    <li><button>날씨</button></li>
                    <li><button>유튜브</button></li>
                </ul>
            </div>
        </div>
    );
}
export default Header;