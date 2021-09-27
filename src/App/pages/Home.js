import React, { useEffect, 
  useMemo, 
  useState } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux';
import { getImages, getTrending } from '../Redux/reducers/MovieConfig';

// services
import { apiSearch, 
  // configCalling, 
  // apiCalling 
} from '../services/service'

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

  // async function configCalling() {
  //   const response = await axios(
  //     `https://api.themoviedb.org/3/configuration?api_key=fded687d14e48654e543b7ecfaea42cc`
  //   );
  //   // console.log("response.data.images", response.data.images)
  //   if (response.status === 200) setConfig_path(response.data.images);
  //   else setIsError(true)
  // }

  // async function apiCalling() {
  //   const response = await axios(
  //     `https://api.themoviedb.org/3/trending/movie/week?api_key=fded687d14e48654e543b7ecfaea42cc`
  //   );
  //   console.log("response.data.results", response.data.results)
  //   if (response.status === 200) setMovies(response.data.results);
  //   else setIsError(true)
  //   setIsLoading(false)
  // }

  const base_path = useSelector( getImages );
  const trending_movies = useSelector( getTrending );
  // Load before render
  useMemo(() => {
    // configCalling();
    // apiCalling();
    // setConfig_path( base_path )
    // setMovies( trending_movies )
    // setIsLoading(false)
  }, []);


  // SearchField component
  const [searchTerm, setSearchTerm] = useState('')

  async function handleSearch( query ){
    setSearchTerm(query)
    const response = await apiSearch( query )
    setMovies(response)
  }

  // useEffect( () => {
  //   // async function authUser(){
  //   //   const response = await realmInit( '6150c97070fab7960eba3d3b' )
  //   //   console.log("user :", response)
  //   // }
  //   // authUser()

  //   async function genreCalling() {
  //     const response = await axios(
  //       `https://api.themoviedb.org/3/genre/movie/list?api_key=fded687d14e48654e543b7ecfaea42cc&language=en-US`
  //     );
  //     console.log("response.data.genre", response)
  //     // if (response.status === 200) setMovies(response.data.results);
  //   }
  //   genreCalling()

  //   // to delete | code to avoid console warnings |
  //   setIsError(false)
  //   setIsLoading(false)
  // })
  




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
