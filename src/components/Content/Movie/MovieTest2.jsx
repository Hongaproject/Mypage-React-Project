import React from "react";
import PropTypes from "prop-types";
 
function MovieTest2({ rank, movieNm, thumbUrl, openDt }) {
  return (
    <div className="Movie">
      {/* <img src={thumbUrl} alt={movieNm} /> */}
      <h1>{rank}위: {movieNm}</h1>
      <h4>출시일: {openDt}</h4>
      <br />
    </div>
  );
}
 
MovieTest2.propTypes = {
  rank: PropTypes.string.isRequired,
  movieNm: PropTypes.string.isRequired,
  thumbUrl: PropTypes.string.isRequired
};
 
export default MovieTest2;