import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { baseImageURl, options } from "../constants/apiConstants";
import Loading from "../components/Loading";
import Badget from "../components/Badget";
const DetailPage = () => {
  const { movie_id } = useParams();

  const [detail, setDetail] = useState(null);

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${movie_id}`, options)
      .then((res) => setDetail(res.data))
      .catch((err) => console.log(err));
  }, []);
  console.log(detail);

  if (!detail) return <Loading />;
  return (
    <div className="movie-detail row p-4">
      <div className="col-md-4 d-flex align-items-center justify-content-center ">
        <div className="position-relative ">
          <img
            src={baseImageURl.concat(detail?.poster_path)}
            className="img-fluid  rounded-2 shadow-lg "
          />
          <span className="vote bg-warning  p-2 rounded-2 shadow position-absolute  ">
            {detail.vote_average.toFixed(1)}
          </span>
        </div>
      </div>

      <div className="col-md-8">
        <h1 className="mt-2">{detail.title}</h1>
        <p>
          <strong>
            Overview: <br /> {detail.overview}
          </strong>
        </p>
        <div className="row">
          <Badget barTitle={"Categories"} badgetTitle={detail.genres} />
          <Badget
            barTitle={"Languages"}
            badgetTitle={detail.spoken_languages}
          />
          <Badget
            barTitle={"Companies"}
            badgetTitle={detail.production_companies}
          />
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
