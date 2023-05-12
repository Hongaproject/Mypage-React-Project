import axios from "axios";
import { useEffect, useState } from "react";
import TmdbI from "./TmdbI";

function TmdbM() {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const getNowPlaying = async () => {
            try{
                const apiKey = process.env.REACT_APP_TMDBMOVIE_KEY;
                const url = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=ko-KR&page=1`);
                setMovies(url.data.results);
            }
            catch(err){
                console.log(err);
            }
        }

        getNowPlaying();
    })

    const getMovieList = async () => {
        const key = process.env.REACT_APP_TMDBMOVIE_KEY;
        const site = `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=ko-KR&page=1`;

        let res = await fetch(site);
        let data = await res.json();
        setMovies(data.results);
    }

    useEffect(() => {
        getMovieList();
    }, []);
    
    return(
        <div>
            {movies.map((movie) => (
                <TmdbI 
                    key={movie.id}
                    title={movie.title}
                    vote_average={movie.vote_average}
                    backdrop_path={movie.backdrop_path}
                />
            ))}
        </div>
    );
}

export default TmdbM;