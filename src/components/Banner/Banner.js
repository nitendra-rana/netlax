import React, { useState, useEffect } from "react";
import "./Banner.css";
import axios from "../../axios";
import requests from "../../request";

const Banner = () => {
  const [movie, setMovie] = useState();

  useEffect(() => {
    const getrequest = async () => {
      const response = await axios.get(
        "https://api.themoviedb.org/3" + requests.fetchTrending
      );

      setMovie(
        response.data.results[
          Math.floor(Math.random() * (response.data.results.length - 1))
        ]
      );
    };

    getrequest();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.slice(0, n - 1) + "..." : str;
  }

  return (
    <>
      <div
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
          backgroundPosition: "center center",
          backgroundSize: "cover",
        }}
        className="banner"
      >
        <div className="banner_content">
          <div className="banner_heading">
            <h1>{movie?.name || movie?.title || movie?.original_name}</h1>
          </div>
          <div className="banner_buttons">
            <button className="banner_button">Play</button>
            <button className="banner_button">My List</button>
          </div>
          <div className="banner_overview">
            {truncate(movie?.overview, 150)}
          </div>
        </div>
        <div className="fade_bottom"></div>
      </div>
    </>
  );
};

export default Banner;