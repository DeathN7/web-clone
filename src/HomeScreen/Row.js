import React, { useState, useEffect } from 'react';
import axios from "../axios";
import "./Row.css";
import Youtube from 'react-youtube';
import movieTrailer from 'movie-trailer';

const IMAGE_BASE_URL = "http://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, LargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
    };
    fetchData();
  }, [fetchUrl]);

  const opts = {
    height: "550",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = async (movie) => {
    try {
      const url = await movieTrailer(movie?.name || "");
      if (!url) {
        console.error(`No trailer URL found for movie: ${movie.name}`);
        return;
      }
      const urlParams = new URLSearchParams(new URL(url).search);
      setTrailerUrl(urlParams.get("v"));
    } catch (error) {
      console.error(error);
      setTrailerUrl("error");
    }
  };

  const handleCloseTrailer = () => {
    setTrailerUrl("");
  };

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row_posters">
        {movies && movies.map((movie) => (
          <img 
            key={movie.id}
            onClick={() => handleClick(movie)}
            className={`row_poster ${LargeRow && "row-posterLarge"}`}
            src={`${IMAGE_BASE_URL}${LargeRow ? movie.poster_path : movie.backdrop_path}`}
            alt={movie.name}
          />
        ))}
      </div>

      {trailerUrl !== "" && (
        <div className="trailer-wrapper" onClick={handleCloseTrailer}>
          <div className="trailer-container" onClick={(e) => e.stopPropagation()}>
            <Youtube videoId={trailerUrl} opts={opts} className="trailer-video"/>
            <span className="trailer-close" onClick={handleCloseTrailer}></span>
          </div>
        </div>
      )}
    </div>
  )
}

export default Row;
