import styles from './Header.module.css';

function Header () {

    const url = "https://www.naver.com/";

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
                                <form action="https://www.google.co.kr/search" method="GET">    
                                        <input name="q" type="text" className={styles.search} placeholder="검색어를 입력해 주세요." required />
                                </form>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </div>
            <div className={styles.sidebar}>
                <ul className={styles.sidebarUl}>
                    <li><button onClick={()=> {window.open(url)}}>네이버</button></li>
                    <li><button>증권</button></li>
                    <li><button>지도</button></li>
                    <li><button>날씨</button></li>
                    <li><button>유튜브</button></li>
                    <li><button>깃허브</button></li>
                    <li><button>노션</button></li>
                </ul>
            </div>
        </div>
    );
}
export default Header;