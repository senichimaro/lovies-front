import React from "react";

// icons
import { BsFillExclamationOctagonFill } from "react-icons/bs";

const NoMoviesAlert = () => {
  return (
    <div className="container d-flex align-items-center my-5 flex-column animate__animated animate__fadeIn">

      <div class="alert alert-warning d-flex align-items-center" role="alert">
          <BsFillExclamationOctagonFill />
        <div className="mx-1">No Movies found</div>
      </div>

    </div>
  );
};

export default NoMoviesAlert;
