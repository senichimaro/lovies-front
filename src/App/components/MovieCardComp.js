import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useSelector } from "react-redux";
import { getImages, getGenre } from "../Redux/reducers/MovieConfig";

// import components
import FavMovieButton from "./FavCardButton";

import error_image from "../assets/images/error_image.jpg";

const MovieCard = ({ movies }) => {
  // authentication boolean
  const { isAuthenticated } = useAuth0();

  // images path
  const config_path = useSelector(getImages);
  // genres data
  const genre_data = useSelector(getGenre);

  return movies
    ? movies.map((movie) => {
        return (
          <div
            className={`p-1 d-flex align-items-stretch animate__animated animate__fadeIn`}
            key={movie.id}
          >
            <div
              className="card col-sm-12 col-md-3 col-lg-4"
              style={{ width: "14rem" }}
            >
              <img
                src={
                  movie.poster_path
                    ? `${config_path.base_url}${config_path.poster_sizes[2]}${movie.poster_path}`
                    : error_image
                }
                className="card-img-top"
                alt={movie.overview.substring(0, 50)}
              />

              {isAuthenticated ? <FavMovieButton movieID={movie.id} /> : null}

              <div className="card-body position-relative">
                <div className="d-flex">
                  <span className="badge bg-success position-absolute top-0 end-0 translate-middle-y">
                    {movie.genre_ids
                      ? genre_data.map((item) =>
                          item.id === movie.genre_ids[0] ? item.name : ""
                        )
                      : ""}
                  </span>
                  <h5 className="card-title">{movie.original_title}</h5>
                </div>
                <p className="card-text">
                  {movie.overview.length > 100
                    ? `${movie.overview.substring(0, 100)}...`
                    : movie.overview}
                </p>
                <div className="btns-wrap align-self-end">
                  <Link
                    to={`movie/${movie.id}`}
                    className="btn btn-outline-danger"
                  >
                    See More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      })
    : null;
};

export default MovieCard;
