import styles from './Header.module.css';

function Header () {

    const stock = "https://finance.naver.com/";
    const map = "https://map.naver.com/";
    const weather = "https://weather.naver.com/";
    const youtube = "https://www.youtube.com/";
    const github = "https://github.com/";
    const notion = "https://www.notion.so/product?utm_source=daum&utm_campaign=brand&utm_medium=bsa&utm_content=type_a&device=c";
    const tstory = "https://www.tistory.com/";

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
                    <li><button onClick={()=> window.open(stock)}><img src="https://hongaproject.github.io/Mypage-React-Project/stock24.png" alt="stock"/></button></li>
                    <li><button onClick={()=> window.open(map)}><img src="https://hongaproject.github.io/Mypage-React-Project//map24.png" alt="stock"/></button></li>
                    <li><button onClick={()=> window.open(weather)}><img src="https://hongaproject.github.io/Mypage-React-Project//weather24.png" alt="stock"/></button></li>
                    <li><button onClick={()=> window.open(youtube)}><img src="https://hongaproject.github.io/Mypage-React-Project//youtube24.png" alt="stock"/></button></li>
                    <li><button onClick={()=> window.open(github)}><img src="https://hongaproject.github.io/Mypage-React-Project//github24.png" alt="stock"/></button></li>
                    <li><button onClick={()=> window.open(notion)}><img src="https://hongaproject.github.io/Mypage-React-Project//notion24.png" alt="stock"/></button></li>
                    <li><button onClick={()=> window.open(tstory)}><img src="https://hongaproject.github.io/Mypage-React-Project//tstory24.png" alt="stock"/></button></li>
                </ul>
            </div>
        </div>
    );
}
export default Header;