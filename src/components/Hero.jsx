import React, { useState } from "react";
import { useSelector } from "react-redux";
import Loading from "./Loading";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { baseImageURl } from "../constants/apiConstants";
const Hero = () => {
  const { movieList, isLoading } = useSelector((store) => ({
    movieList: store.movieReducer.popularMovies,
    isLoading: store.movieReducer.isLoading,
  }));

  const randomIndex = Math.floor(Math.random() * movieList.length);
  const randomMovie = movieList[randomIndex];

  return (
    <div className="d-flex align-items-start flex-column p-4">
      {isLoading && <Loading />}
      {!isLoading && (
        <div className="d-flex align-items-center justify-content-between w-100">
          <div className="col-md-6 d-flex gap-3 flex-column align-items-start">
            <h1>{randomMovie.title}</h1>
            <p>{randomMovie.overview}</p>
            <p className="text-warning fw-bold">IMDB {randomMovie.vote_average}</p>

            <div className="d-flex gap-3">
              <Link to={`movie/${randomMovie.id}`} className="btn btn-danger">
                Watch Now
              </Link>
              <Link className="btn btn-info">Add to list</Link>
            </div>
          </div>

          <div className="col-md-6">
            <img className="rounded-2 img-fluid" src={`${baseImageURl}${randomMovie.backdrop_path}`} alt={randomMovie.title} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
