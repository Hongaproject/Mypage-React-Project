import { useEffect, useState } from "react";
import styles from "./Weather.module.css";


function Weather () {

    const [weather, setWeather] = useState(null);
    const [wicon, setWicon] = useState(null);

    const getCurrentLocation = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            let lat = position.coords.latitude;
            let lon = position.coords.longitude;
            getWeatherCurrentLocation(lat, lon);
            // console.log(lat ,lon);
            
        });
    };

    const getWeatherCurrentLocation = async (lat, lon) => {
        const apiKey = process.env.REACT_APP_WEATHER_KEY;
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
        // const url = `api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&cnt=7&appid=${apiKey}`; 

        let response = await fetch(url);
        let data = await response.json();
        setWeather(data);
        // console.log(data);
        setWicon(data.weather[0].icon);
    };

    useEffect(() => {
        getCurrentLocation();
    }, []);

    const getWeatherIcon = () => {
        let iconurl = "http://openweathermap.org/img/w/" + wicon + ".png";

        return <img src={iconurl}/>
    }

    

    const toDay = () =>{ 
        let now = new Date();
        let todayYear = now.getFullYear();
        // let todayMonth = now.getMonth() + 1;
        // let todayDate = now.getDate();
        let todayMonth = (now.getMonth() + 1) > 9 ? (now.getMonth() + 1) : '0' + (now.getMonth() + 1);
        let todayDate = now.getDate() > 9 ? now.getDate() : '0' + now.getDate();
        
        return todayYear + '-' + todayMonth + '-' + todayDate;
    } 

    return(
        <div className={styles.weatherMain}>
            <h2 className={styles.titleh2}>오늘의 날씨</h2>
            <div className={styles.day}>{toDay()}</div> 
            <div className={styles.name}>{weather?.name}</div> 
                <div className={styles.icon}>
                    {getWeatherIcon()}
                    <ul className={styles.iconUl}>
                        <li>온도 : {weather?.main.temp} ℃</li>
                        <li>날씨 : {weather?.weather[0].main}</li>
                    </ul>
                    {/* <ul className={styles.iconUl}>
                        <li>습도 : {weather?.main.humidity}%</li>
                        <li>풍속 :  {weather?.wind.speed }m/s</li>
                    </ul> */}
                </div>
                {/* <div>{weather?.weather[0].description}</div> */}
                <div>습도 : {weather?.main.humidity}%</div>
                <div>풍속 :  {weather?.wind.speed }m/s</div>
                {/* <div>구름 : {weather?.clouds.all}%</div> */}
            
        </div>
    );
}

export default Weather;