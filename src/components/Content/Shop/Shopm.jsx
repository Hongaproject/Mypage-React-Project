import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function Shopm() {

    const movePage = useNavigate();

    const gohome= () => {
       movePage('/');
     }

    const Container = styled.div`
     width: 1280px;
     height: 720px;
     /* background-color: aqua; */
     position: absolute;
     top: 50%;
     left: 50%;
     transform: translate(-50%, -50%);
     text-align: center;

     
    `

    const Title = styled.div`
     display: flex;
     justify-content: center;

     button{
        border: none;
        background: transparent;
     }
    `
    const Shops = styled.div`
     border: 1px solid black;
     border-radius: 2rem;
     height: 200px;
     margin-bottom: 10px;
    `

    const Ofpen = styled.div`
     border: 1px solid black;
     border-radius: 2rem;
     height: 200px;
     margin-bottom: 10px;
    `

    const Travel = styled.div`
     border: 1px solid black;
     border-radius: 2rem;
     height: 200px;
     margin-bottom: 10px;
    `

    return(
        <Container>
            <Title>
            <button onClick={gohome} title="클릭하시면 메인페이지로 이동합니다."><h1>모음집</h1></button>
            </Title>
                <Shops>
                    <h3>쇼핑몰</h3>
                        <a href="https://www.musinsa.com/" target="_blank"><img src="/musinsaT.png" alt="photo" /></a>
                        <a href="https://kream.co.kr/" target="_blank"><img src="/kreamT.png" alt="photo" /></a>
                        <a href="https://www.lookpin.co.kr/" target="_blank"><img src="/lookpin.png" alt="photo" /></a>
                        <a href="https://shopping.naver.com/home" target="_blank"><img src="/navers.png" alt="photo" /></a>
                </Shops>
                <Ofpen>
                    <h3>먹거리 및 생필품</h3>
                        <a href="https://shopping.naver.com/home" target="_blank"><img src="/navers.png" alt="photo" /></a>
                        <a href="https://www.tmon.co.kr/" target="_blank"><img src="/tmonT.png" alt="photo" /></a>
                        <a href="https://www.coupang.com/" target="_blank"><img src="/coupangT.png" alt="photo" /></a>
                </Ofpen>
                <Travel>
                    <h3>여행</h3>
                        <a href="https://korean.visitkorea.or.kr/" target="_blank"><img src="/travelT.png" alt="photo" /></a>
                        <a href="https://www.airbnb.co.kr/" target="_blank"><img src="/air.png" alt="photo" /></a>
                        <a href="https://www.expedia.co.kr/" target="_blank"><img src="/expedia.png" alt="photo" /></a>
                        <a href="https://www.agoda.com/ko-kr/" target="_blank"><img src="/agoda.png" alt="photo" /></a>
                        <a href="https://www.yanolja.com/" target="_blank"><img src="/yanolja.png" alt="photo" /></a>
                        <a href="https://www.goodchoice.kr/" target="_blank"><img src="/here.png" alt="photo" /></a>
                        <a href="https://www.dailyhotel.com/" target="_blank"><img src="/daily.png" alt="photo" /></a>
                </Travel>
        </Container>
    );
}

export default Shopm;