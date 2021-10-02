import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { findMovie } from "../services/service";
import { useSelector } from "react-redux";
import { getImages, getGenre } from "../Redux/reducers/MovieConfig";

import error_image_bg from "../assets/images/error_image_bg.jpg";

const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState();

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
    <div className="container my-5">
      <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
        <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
            <div className="title_line position-relative">
          <h1 className="display-4 fw-bold lh-1">{movie.original_title}</h1>

            </div>
          <div className="d-flex flex-wrap">
              {movie.genres
                ? genre_data.map((db_genre) => {
                    for (let mv_genre in movie.genres) {
                      if (db_genre.id === movie.genres[mv_genre].id) return (
                        <span className="badge bg-primary m-1" key={mv_genre}>{db_genre.name}</span>
                      )
                    }
                    return null
                  })
                : null}
          </div>
          <p className="lead">{movie.overview}</p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
            <button
              type="button"
              className="btn btn-primary btn-lg px-4 me-md-2 fw-bold"
            >
              Primary
            </button>
            <button
              type="button"
              className="btn btn-outline-secondary btn-lg px-4"
            >
              Default
            </button>
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
  ) : null;
};

export default Movie;
