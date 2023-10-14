import axios from "axios";
import { useEffect, useState } from "react";
import { options } from "../constants/apiConstants";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { baseImageURl } from "../constants/apiConstants";
import { Link } from "react-router-dom";
const MovieList = ({ genre }) => {
  const [movies, setMovies] = useState(null);
  useEffect(() => {
    axios
      .get(
        `/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${genre.id}`,
        options
      )
      .then((res) => setMovies(res.data.results));
  }, []);
  console.log(movies);
  return (
    <div>
      <h2 className="m-2 fs-1 ">{genre.name}</h2>
      <Splide
        options={{
          gap: "15px",
          autoWidth: true,
          pagination: false,
        }}
        aria-label="My Favorite Images"
      >
        {movies?.map((movie) => (
          <SplideSlide>
            <Link to={`movie/${movie.id}`}>
             <img className="movie" src={baseImageURl.concat(movie.poster_path)}
              alt="Image 1"
              />
            </Link>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};
export default MovieList;
