import { useEffect, useState } from "react";
import styles from "./Weather.module.css";


function Weather () {

    const [weather, setWeather] = useState(null);

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

        let response = await fetch(url);
        let data = await response.json();
        setWeather(data);
        console.log(data.weather[0].icon);
    };

    useEffect(() => {
        getCurrentLocation();
    }, []);

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
            <div>
                <strong>시계, 날씨</strong>
                <div>{toDay()}</div>
                <div>{weather?.name}</div>
                <div>{weather?.main.temp}</div>
                <div>{weather?.weather[0].description}</div>
                <div>{weather?.wind.speed}</div>
            </div>
        </div>
    );
}

export default Weather;