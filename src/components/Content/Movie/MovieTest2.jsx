import React from "react";
import PropTypes from "prop-types";
 
function MovieTest2({ rank, movieNm }) {
  return (
    <div className="Movie">
      <h1>
        {rank}위:{movieNm}
      </h1>
    </div>
  );
}
 
MovieTest2.propTypes = {
  rank: PropTypes.string.isRequired,
  movieNm: PropTypes.string.isRequired
};
 
export default MovieTest2;