import React, { useEffect, useState } from "react";
import axios from "../../axios";
import "./Row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const baseUrl = "https://image.tmdb.org/t/p/original/";

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const [showerror, seterror] = useState(false);

  useEffect(() => {
    async function getMovies() {
      const response = await axios.get(
        "https://api.themoviedb.org/3" + fetchUrl
      );
      setMovies(response.data.results);
    }
    getMovies();
  }, [fetchUrl]);

  const opts = {
    height: "350px",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const setTrailerHandler = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || movie?.title || movie?.original_name || "")
        .then((url) => {
          seterror(false);
          const useParam = new URLSearchParams(new URL(url).search);
          const link = useParam.get("v");
          setTrailerUrl(link);
        })
        .catch((error) => {
          console.log(error);
          seterror(true);
        });
    }
  };

  return (
    <div className="row">
      <h2
        style={{
          marginLeft: "15px",
        }}
      >
        {title}
      </h2>
      <div className="row_posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            onClick={() => setTrailerHandler(movie)}
            className={`row_poster ${isLargeRow && "row_poster_large"}`}
            src={
              isLargeRow
                ? `${baseUrl}${movie.poster_path}`
                : `${baseUrl}${movie.backdrop_path}`
            }
            alt={movie.name}
          />
        ))}
      </div>
      {trailerUrl ? (
        <YouTube videoId={trailerUrl} opts={opts} />
      ) : (
        <div
          style={{
            textAlign: "center",
            display: showerror ? "block" : "none",
            color: "red",
            margin: "10px",
          }}
        >
          Sorry to inform you that no trailer related to this movies is
          available in our database. Have a nice day !
        </div>
      )}
    </div>
  );
};

export default Row;