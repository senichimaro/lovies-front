import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { addMovieCollection } from "../services/service";

// icons
import { BsFillStarFill } from "react-icons/bs";
import { BsStar } from "react-icons/bs";
import { BsFillPlayFill } from "react-icons/bs";
import { BsPlay } from "react-icons/bs";

const FavMovieButton = ({ movieID }) => {
  const [isFav, setIsFav] = useState(false);
  const [isLater, setIsLater] = useState(false);
  const { user } = useAuth0()

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
    
    // value action-name
    let list_name = 0
    const tarValue = event.target.getAttribute('data-value')
    const idValue = parentEl.parentNode.getAttribute('data-value')
    // clicked target
    if ( parseInt(value) ) list_name = value
    else if ( parseInt(idValue) ) list_name = idValue
    else if ( parseInt(tarValue) ) list_name = tarValue
    else list_name = parentEl.getAttribute('data-value')
    
    
    // console.log("movie_id",movie_id)
    // console.log("list_name",list_name)
    
    if ( list_name > 1 ){
      setIsLater( ! isLater )
      addMovieCollection(user.email, movie_id, false)
    }
    else {
      setIsFav( ! isFav )
      addMovieCollection(user.email, movie_id, true)
    }

  };

  return (
    <div className="d-flex alig-items-center flex-wrap">
      <button
        onClick={_handleClick}
        className={`btn btn-primary m-1`}
        type="button"
        name={movieID}
        value="1"
      >
        <span
          className="d-flex align-items-center"
          data-name={movieID}
          data-value="1"
        >
          {
            isFav ? <BsFillStarFill /> : <BsStar />
          }
          {/* <BsFillStarFill /> */}
          <span className="mx-1">Add to Favorites</span>
        </span>
      </button>

      <button
        onClick={_handleClick}
        className={`btn btn-secondary m-1`}
        type="button"
        name={movieID}
        value="2"
      >
        <span
          className="d-flex align-items-center"
          data-name={movieID}
          data-value="2"
        >
          {
            isLater ? <BsFillPlayFill /> : <BsPlay />
          }
          {/* <BsFillPlayFill /> */}
          <span className="mx-1">See Later</span>
        </span>
      </button>
    </div>
  );
};

export default FavMovieButton;
