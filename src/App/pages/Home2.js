// libs
import React, { useEffect, useMemo, useState } from 'react'
// redux handlers
import { useSelector } from 'react-redux';
import { getImages, getTrending, getIsLoading } from '../Redux/reducers/MovieConfig';
// services
import { apiSearch } from '../services/service'

// bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// import components
import NavComp from "../components/NavComp";
import SearchField from "../components/SearchField";
import MovieCard from '../components/MovieCardComp'

const Home = () => {
  // initialization
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  // MovieCard component
  const [movies, setMovies] = useState([]);
  const [config_path, setConfig_path] = useState(null);

  // redux state 
  const base_path = useSelector( getImages );
  const trending_movies = useSelector( getTrending );
  const IsStatus = useSelector( getIsLoading );

  // SearchField component
  const [searchTerm, setSearchTerm] = useState('')

  async function handleSearch( query ){
    setSearchTerm(query)
    const response = await apiSearch( query )
    setMovies(response)
  }
  
  useEffect(() => {
    async function rdxInit(){
      await setConfig_path( base_path )
      await setMovies( trending_movies )
      await setIsLoading( false )
    }
    rdxInit()
  }, [])




  return (
    <>
      <NavComp />
      <SearchField searchTerm={searchTerm} handleSearch={handleSearch} />
      {
        ! isLoading ?
          ! isError
            ? movies.length > 0
              ? (
                  <div className="container my-5 d-flex flex-wrap justify-content-center">
                    <MovieCard movies={movies} config_path={config_path} />
                  </div>
              )
              : 'No movies to render'
          : 'Is Error'
        : 'Is Loading'
      }
    </>
  );
};

export default Home;
