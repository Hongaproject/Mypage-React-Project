function TmdbI({title, vote_average, backdrop_path, release_date, overview}) {
    return(
        <div>
            <img src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}/>
            <h3>제목 : {title}</h3>
            <h4>개봉일 : {release_date}</h4>
            <h4>평점 : {vote_average}</h4>
            <p><strong>줄거리</strong> <br/> {overview.slice(0,180)}...</p>
            <br />
        </div>
    );
}

export default TmdbI;