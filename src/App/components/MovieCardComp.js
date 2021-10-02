import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useSelector } from "react-redux";
import { getImages, getGenre } from "../Redux/reducers/MovieConfig";

import error_image from "../assets/images/error_image.jpg";

import { BsFillStarFill } from "react-icons/bs";
import { IconContext } from "react-icons";

const MovieCard = ({ movies }) => {
  // authentication boolean
  const { isAuthenticated } = useAuth0()

  // images path
  const config_path = useSelector(getImages);
  // genres data
  const genre_data = useSelector(getGenre);

  const _handleClick = (event) => {
    event.preventDefault();
    const {name} = event.target
    if ( parseInt(name) ) console.log("name", name)
    else {
        if ( isNaN( parseInt(event.target.parentNode.classList[0]) ) ) console.log("(className)", event.target.classList[0])
        else console.log("isNaN(className)", event.target.parentNode.classList[0])
    }
  };

  return movies
    ? movies.map((movie) => {
    // console.log(movie)
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

              {
                isAuthenticated
                ? (
                  <button
                    type="button"
                    onClick={_handleClick}
                    className="btn badge fs-5 text-warning position-absolute top-0 end-0"
                    name={movie.id}
                  >
                    <IconContext.Provider
                      value={{ className: movie.id }}
                    >
                        <BsFillStarFill />
                    </IconContext.Provider>
                  </button>
                )
                : null
              }

              <div className="card-body position-relative">
                <div className="d-flex">
                  <span className="badge bg-primary position-absolute top-0 end-0 translate-middle-y">                    
                    {
                        movie.genre_ids
                        ? genre_data.map( item => ( item.id === movie.genre_ids[0] ? item.name : '' ))
                        : ''
                    }
                  </span>
                  <h5 className="card-title">{movie.original_title}</h5>
                </div>
                <p className="card-text">
                  {movie.overview.length > 100
                    ? `${movie.overview.substring(0, 100)}...`
                    : movie.overview}
                </p>
                <div className="btns-wrap align-self-end">
                  <Link to={`movie/${movie.id}`} className="btn btn-primary">
                    Go somewhere
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