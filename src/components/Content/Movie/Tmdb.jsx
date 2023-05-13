import axios from "axios";
import { useEffect, useState } from "react";

function Tmdb() {
    // useEffect(() => {
    //     const getNowPlaying = async () => {
    //         try{
    //             const apiKey = process.env.REACT_APP_TMDBMOVIE_KEY;
    //             const url = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=ko-KR&page=1`);
    //             console.log(url);
    //         }
    //         catch(err){
    //             console.log(err);
    //         }
    //     }

    //     getNowPlaying();
    // }, []);


    const getNowPlaying = async () => {
        // const apiKey = process.env.REACT_APP_TMDBMOVIE_KEY;
        const url = await axios.get(`
        https://api.themoviedb.org/3/movie/popular?api_key=31bcb62887847e7c9f52dd97f9fec49&language=ko-KR&page=1`);
        console.log(url);

        let response = await fetch(url);
        let data = await response.json();
        console.log(data);
    }

    useEffect(() => {
        getNowPlaying();
    }, []);

    return(
        <div>
            
        </div>
    );
}

export default Tmdb;