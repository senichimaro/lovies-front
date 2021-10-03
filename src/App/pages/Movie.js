import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useParams } from "react-router-dom";
import { findMovie } from "../services/service";
import { useSelector } from "react-redux";
import { getImages, getGenre } from "../Redux/reducers/MovieConfig";

// components
import NavComp from "../components/NavComp";

// error image
import error_image_bg from "../assets/images/error_image_bg.jpg";

// icons
import { BsFillStarFill } from "react-icons/bs";
import { BsFillPlayFill } from "react-icons/bs";

const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState();
  // authentication boolean
  const { isAuthenticated } = useAuth0();

  // images path
  const config_path = useSelector(getImages);
  // genres data
  const genre_data = useSelector(getGenre);

  const _handleClick = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    
    // get movie id
    let movie_id = 0;
    const parentEl = event.target.parentNode;
    const idName = parentEl.parentNode.getAttribute('data-name')
    // clicked target
    if ( parseInt(name) ) movie_id = name
    else if ( parseInt(idName) ) movie_id = idName
    else movie_id = parentEl.getAttribute('data-name')
    
    // console.log("movie_id",movie_id)
    
    // value action-name
    let list_name = 0
    const tarValue = event.target.getAttribute('data-value')
    const idValue = parentEl.parentNode.getAttribute('data-value')
    // clicked target
    if ( parseInt(value) ) list_name = value
    else if ( parseInt(idValue) ) list_name = idValue
    else if ( parseInt(tarValue) ) list_name = tarValue
    else list_name = parentEl.getAttribute('data-value')

    // console.log("list_name",list_name)

    // if ( list_name > 1 )
    // else 
  };

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

              {isAuthenticated ? (
                <div className="d-flex alig-items-center flex-wrap">

                  <button
                    onClick={_handleClick}
                    className="btn btn-primary m-1"
                    type="button"
                    name={movie.id}
                    value="1"
                  >
                    <span className="d-flex align-items-center" data-name={movie.id} data-value="1">
                      <BsFillStarFill />
                      <span className="mx-1">Add to Favorites</span>
                    </span>
                  </button>

                  <button
                    onClick={_handleClick}
                    className="btn btn-secondary m-1"
                    type="button"
                    name={movie.id}
                    value="2"
                  >
                    <span className="d-flex align-items-center" data-name={movie.id} data-value="2">
                      <BsFillPlayFill />
                      <span className="mx-1">See Later</span>
                    </span>
                  </button>
                  
                </div>
              ) : null}
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
