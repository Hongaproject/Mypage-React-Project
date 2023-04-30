import { HashRouter} from "react-router-dom";
import MovieSearch from "./MovieSearch";


function Movie () {
    return(
        <HashRouter>
            <MovieSearch />
        </HashRouter>
    );
}

export default Movie;