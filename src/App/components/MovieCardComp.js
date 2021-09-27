import React from 'react'
import { Link } from 'react-router-dom'

import error_image from '../assets/images/error_image.jpg'

const MovieCard = ({ movies, config_path }) => {
    return (
        movies
        ? movies.map( movie => {
            return (
                <div className="p-1 d-flex align-items-stretch" key={movie.id}>
                    <div className="card col-sm-12 col-md-3 col-lg-4" style={{width: "14rem"}}>
                        <img 
                            src={ movie.poster_path
                                ? `${config_path.base_url}${config_path.poster_sizes[2]}${movie.poster_path}`
                                : error_image
                            } 
                            className="card-img-top" 
                            alt={movie.overview.substring(0,50)}
                        />
                        <div className="card-body">
                            <h5 className="card-title">{movie.original_title}</h5>
                            <p className="card-text">{movie.overview.length > 100 ? `${movie.overview.substring(0,100)}...` : movie.overview }</p>
                            <div className="btns-wrap align-self-end">
                                <Link to="#" className="btn btn-primary">Go somewhere</Link>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
        : ''
    )
}

export default MovieCard