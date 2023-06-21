import MovieTest1 from "./MovieTest1";
import styles from "./Movie.module.css";

function Movie () {

    return (
        <div className={styles.movieMain}>
            <MovieTest1 />
        </div>
    );
}


export default Movie;