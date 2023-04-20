import styles from "./Weather.module.css";


function Weather () {

    const getCurrentLocation = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            let lat = position.coords.latitude;
            let lon = position.coords.longitude;
            console.log("현재 위치", lat, lon);
            getWeatherCurrentLocation(lat, lon);
        });
    };

    const getWeatherCurrentLocation = async (lat, lon) => {
        const apiKey = process.env.REACT_APP_WEATHER_KEY;
        // const apiKey = "c5d493679d57784d27290099bfcceb6a";
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
        
        let response = await fetch(url);
        let data = await response.json();
        console.log(data);

    };
        getCurrentLocation();


        
    return(
        <div className={styles.weatherMain}>
            
        </div>
    );
}

export default Weather;