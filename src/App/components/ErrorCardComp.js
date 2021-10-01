import React from "react";

const ErrorCard = () => {
  return (
    <div className="container d-flex justify-content-center animate__animated animate__fadeIn">
      <div class="card mb-3" style={{ maxWidth: "30rem" }}>
        <div class="row g-0">
          <div class="card-body">
            <h5 class="card-title text-danger">Error has raisen</h5>
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorCard;
