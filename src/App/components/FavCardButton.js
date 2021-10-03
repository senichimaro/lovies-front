import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

// icons
import { BsFillStarFill } from "react-icons/bs";
import { BsStar } from "react-icons/bs";
import { IconContext } from "react-icons";


const FavCardButton = ({ movieID }) => {
    const [isSelected , setIsSelected] = useState();
    const { user } = useAuth0()
    
  const _handleClick = (event) => {
    event.preventDefault();
    // const { name } = event.target;
    // let parent_wrapper = "";
    let parent_wrapper = event.target.name;
    // let icon_location = "";
    // let icon_wrapper = "";
    setIsSelected( ! isSelected )

    // if (parseInt(name)) {
    if (parseInt(parent_wrapper)) {
      console.log("movie_id", parent_wrapper)
      // icon_location = `.star-${name}`;
      // icon_wrapper = document.querySelector(icon_location);
    } else if (parseInt(event.target.parentNode.name)) {
      parent_wrapper = event.target.parentNode.name;
      console.log("movie_id", parent_wrapper)
      // icon_location = `.star-${parent_wrapper}`;
      // icon_wrapper = document.querySelector(icon_location);
    } else if (isNaN(parseInt(event.target.parentNode.classList[0]))) {
      parent_wrapper = event.target.parentNode.parentNode.name;
      console.log("movie_id", parent_wrapper)
      // icon_location = `.star-${parent_wrapper}`;
      // icon_wrapper = document.querySelector(icon_location);
    } else {
      parent_wrapper = event.target.parentNode.classList[0];
      console.log("movie_id", parent_wrapper)
      // icon_location = `.star-${parent_wrapper}`;
      // icon_wrapper = document.querySelector(icon_location);
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={_handleClick}
        className="btn badge fs-5 text-warning position-absolute top-0 end-0"
        name={movieID}
      >
        <IconContext.Provider value={{ className: `star-${movieID}` }}>
          {isSelected ? <BsFillStarFill /> : <BsStar />}
        </IconContext.Provider>
      </button>
    </>
  );
};

export default FavCardButton;
