import React from 'react'

// spinner style
const sizeVar = 5;
const sizeUnit = 'rem';
const spinnerStyle = {
  width:sizeVar + sizeUnit,
  height:sizeVar + sizeUnit
}

const LoadingSpinner = () => {
    return (
        <div className="container d-flex align-items-center my-5 flex-column">
          <div style={spinnerStyle} className="spinner-border text-dark" role="status"></div>
          <span className="text-uppercase">Loading...</span>
        </div>
      )
}

export default LoadingSpinner