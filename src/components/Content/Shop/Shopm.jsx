import { useNavigate } from "react-router-dom";

function Shopm() {

    const movePage = useNavigate();

    const gohome= () => {
       movePage('/');
     }

    return(
        <div>
            쇼핑몰 더보기 입니다.
            <button onClick={gohome}>메인페이지로 이동</button>
        </div>
    );
}

export default Shopm;