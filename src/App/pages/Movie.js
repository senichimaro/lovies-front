import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useParams } from "react-router-dom";
import { findMovie } from "../services/service";
import { useSelector } from "react-redux";
import { getImages, getGenre } from "../Redux/reducers/MovieConfig";

// components
import NavComp from "../components/NavComp";
import FavMovieButton from "../components/FavMovieButton";

// error image
import error_image_bg from "../assets/images/error_image_bg.jpg";

const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState();
  // authentication boolean
  const { isAuthenticated } = useAuth0();

  // images path
  const config_path = useSelector(getImages);
  // genres data
  const genre_data = useSelector(getGenre);

  useEffect(() => {
    async function getMovie(movieID) {
      const response = await findMovie(movieID);
      console.log("getMovie response.data", response.data);
      // return response.data
      setMovie(response.data);
    }
    getMovie(id);
  }, [id]);

  return movie ? (
    <>
      <NavComp />
      <div className="container my-5">
        <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
          <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
            <h1 className="display-4 fw-bold lh-1">{movie.original_title}</h1>
            <div className="d-flex flex-wrap">
              {movie.genres
                ? genre_data.map((db_genre) => {
                    for (let mv_genre in movie.genres) {
                      if (db_genre.id === movie.genres[mv_genre].id)
                        return (
                          <span className="badge bg-success m-1" key={mv_genre}>
                            {db_genre.name}
                          </span>
                        );
                    }
                    return null;
                  })
                : null}
            </div>
            <p className="lead">{movie.overview}</p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">

              {isAuthenticated ? <FavMovieButton /> : null}
            </div>
          </div>
          <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
            <img
              className="rounded-lg-3 img-fluid"
              src={
                movie.poster_path
                  ? `${config_path.base_url}${config_path.poster_sizes[4]}${movie.poster_path}`
                  : error_image_bg
              }
              alt={movie.budget + " alt text"}
              width="720"
            />
          </div>
        </div>
      </div>
    </>
  ) : null;
};

export default Movie;
