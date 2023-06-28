import React, { Component } from "react";
import MovieTest2 from "./MovieTest2";
import styles from "./Movie.module.css";

const key = process.env.REACT_APP_MOVIE_KEY;
 
const getDate = new Date();
const yDate = getDate.getTime(1 * 24 * 60 * 60 * 1000);
getDate.setTime(yDate);
var yYear = getDate.getFullYear();
var yMonth = getDate.getMonth() + 1;
var yDay = getDate.getDate() - 1;
 
if (yMonth < 10) {
  yMonth = "0" + yMonth;
}
if (yDay < 10) {
  yDay = "0" + yDay;
}
const resultDate = yYear + "-" + yMonth + "-" + yDay;
 
const res = resultDate.slice(0, 10).replace(/-/g, "");
 
class MovieTest1 extends Component {
  state = {};
 
  componentDidMount() {
    this._getMovies();
  }
 
  _renderMovies = () => {
    const movies = this.state.movies.map((dailyBoxOfficeList, index) => {
      return (
        <MovieTest2
          rank={dailyBoxOfficeList.rank}
          movieNm={dailyBoxOfficeList.movieNm}
          key={index}
          openDt={dailyBoxOfficeList.openDt}
        />
      );
    });
    return movies;
  };
 
  _getMovies = async () => {
    const movies = await this._callApi();
    this.setState({
      movies
    });
  };
 
  _callApi = () => {
    return fetch(
      `http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${key}&targetDt=${res}&itemPerPage=5`
      )
      
      .then(a => a.json())
      .then(json => json.boxOfficeResult.dailyBoxOfficeList)
      .catch(err => console.log(err));
  };
 
  render() {
    const { movies } = this.state;
    return (
      <div>
        <h1>현재 상영 영화 순위</h1>
        <button className={styles.btn} onClick={()=> window.open("https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&query=%ED%98%84%EC%9E%AC%EC%83%81%EC%98%81%EC%98%81%ED%99%94&oquery=%EC%98%81%ED%99%94&tqi=i5evAsprvTVssf%2FmKtwssssstL0-412076")}>현재 상영중인 영화 더 알아보기</button>
        {movies ? this._renderMovies() : "로딩중 ..."}
      </div>
    );
  }
}
export default MovieTest1;