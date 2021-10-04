import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { addMovieCollection } from "../services/service";

// icons
import { BsFillStarFill } from "react-icons/bs";
import { BsStar } from "react-icons/bs";
import { IconContext } from "react-icons";


const FavCardButton = ({ movieID }) => {
    const [isSelected , setIsSelected] = useState();
    const { user } = useAuth0()
    
    const _handleClick = (event) => {
      event.preventDefault();
      let parent_wrapper = event.target.name;
      setIsSelected( ! isSelected )
      
      if ( parseInt(parent_wrapper) ){}
      else if ( parseInt(event.target.parentNode.name) ) parent_wrapper = event.target.parentNode.name;
      else if ( isNaN(parseInt(event.target.parentNode.classList[0])) ) parent_wrapper = event.target.parentNode.parentNode.name;
      else parent_wrapper = event.target.parentNode.classList[0]
      
      
      // console.log("FavCardButton user",user.email)
      // console.log("parent_wrapper",parent_wrapper)

      addMovieCollection( user.email, parent_wrapper, true )

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
