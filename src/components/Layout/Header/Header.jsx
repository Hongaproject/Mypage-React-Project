import styles from './Header.module.css';

function Header () {

    const naver = "https://www.naver.com/";

    return (
        <div className={styles.header}>
            <div className={styles.logoInput}>
                <div className={styles.searchBar}>
                            <div>
                                <form action="https://www.google.co.kr/search" method="GET">    
                                        <input name="q" type="text" className={styles.search} placeholder="검색어를 입력해 주세요." required />
                                </form>
                                {/* <form action="https://search.naver.com/search.naver" method="GET">    
                                        <input name="query" type="text" className={styles.search} placeholder="검색어를 입력해 주세요." required />
                                </form> */}
                            </div>
                </div>
            </div>
            <div className={styles.sidebar}>
                <ul className={styles.sidebarUl}>
                    <li><button><img src="/stock24.png" alt="stock"/></button></li>
                    <li><button><img src="/map24.png" alt="stock"/></button></li>
                    <li><button><img src="/weather24.png" alt="stock"/></button></li>
                    <li><button><img src="/youtube24.png" alt="stock"/></button></li>
                    <li><button><img src="/github24.png" alt="stock"/></button></li>
                    <li><button><img src="/notion24.png" alt="stock"/></button></li>
                    <li><button onClick={()=> window.open(naver)}><img src="/tstory24.png" alt="stock"/></button></li>
                </ul>
            </div>
        </div>
    );
}
export default Header;