import React, { useEffect, useState } from 'react'
import axios from 'axios'

// import components
import MovieCard from './MovieCardComp'

const Deck = () => {

    return (
        <div className="container my-5 d-flex flex-wrap justify-content-center">
            <MovieCard movies={movies} config_path={config_path}/>
        </div>
    )
}

export default Deck