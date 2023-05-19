import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Shopc () {

    const movePage = useNavigate();

    const gohome = () => {
        movePage('/shop');
    }

    return(
        <div>
            {/* <Link to="/shop">모음집</Link> */}
            마이페이지 입니다.
            <button onClick={gohome}>홈으로이동</button>
        </div>

    );
}

export default Shopc;