import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link, useRouteMatch } from "react-router-dom";
import { useSelector } from "react-redux";
import { getImages, getGenre } from "../Redux/reducers/MovieConfig";

import { findMovieCollection } from "../services/service";

import error_image from "../assets/images/error_image.jpg";

const Favorites = () => {
  const { isAuthenticated, user } = useAuth0();
  const [isMovies, setIsMovies] = useState([]);
  const { path } = useRouteMatch()

  // images path
  const config_path = useSelector(getImages);
  // genres data
  const genre_data = useSelector(getGenre);

  
  useEffect(() => {
      const getMoviesObjs = async (email) => {
        const response = await findMovieCollection(user.email);
        let movies_arr = null
        if ( path === '/favorites' ) movies_arr = response.data.data.favorites.map((item) => JSON.parse(item) );
        else movies_arr = response.data.data.later.map((item) => JSON.parse(item) );
        setIsMovies(movies_arr);
      };
    getMoviesObjs(user.email);
  }, [user.email, path]);

  return isAuthenticated ? (
      <div className="container">
        <div className="row d-flex justify-content-center">
          {isMovies.length ?
            isMovies.map((item) => (
              <div className="col-sm-12 col-md-6 col-lg-4 p-1" key={item.id}>
                <div className="card" style={{ maxWidth: "540px" }}>
                  <div className="row g-0">
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">{item.original_title}</h5>
                        <div className="d-flex flex-wrap">
                          {item.genres
                            ? genre_data.map((db_genre) => {
                                for (let mv_genre in item.genres) {
                                  if (db_genre.id === item.genres[mv_genre].id)
                                    return (
                                      <span
                                        className="badge bg-success m-1"
                                        key={mv_genre}
                                      >
                                        {db_genre.name}
                                      </span>
                                    );
                                }
                                return null;
                              })
                            : null}
                        </div>
                        <p className="card-text">{item.overview}</p>
                        <div className="btns-wrap align-self-end">
                          <Link
                            to={`movie/${item.id}`}
                            className="btn btn-outline-danger"
                          >
                            See More
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-4">
                      <img
                        src={
                          item.poster_path
                            ? `${config_path.base_url}${config_path.poster_sizes[2]}${item.poster_path}`
                            : error_image
                        }
                        className="card-img-top"
                        alt={item.overview.substring(0, 50)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))
            : null
        }
        </div>
      </div>
  ) : null;
};

export default Favorites;
