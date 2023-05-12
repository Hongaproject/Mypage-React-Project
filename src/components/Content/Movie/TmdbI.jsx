function TmdbI({title, vote_average, backdrop_path}) {
    return(
        <div>
            <h3>{title}</h3>
            <h4>{vote_average}</h4>
            <img src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}/>
            <br />
        </div>
    );
}

export default TmdbI;