import React, { useMemo, useState } from "react";
// import axios from "axios";

// services
import { apiSearch, getApiData, paginationCalling } from "../services/service";

// bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
// css effects
import "animate.css/animate.min.css"


// import components
import NavComp from "../components/NavComp";
import SearchField from "../components/SearchField";
import MovieCard from "../components/MovieCardComp";
import ErrorCard from "../components/ErrorCardComp";
import LoadingSpinner from "../components/LoadingSpinner";
import NoMoviesAlert from "../components/NoMoviesAlert";
import PaginationComp from '../components/PaginationComp'

const Home = () => {
  // initialization
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [isPage, setIsPage] = useState(0);
  const [isTotalPages, setIsTotalPages] = useState(0);

  // MovieCard component
  const [movies, setMovies] = useState([]);

  async function apiCalling( page = false ) {
    const response = await getApiData( page )
    if (response.status === 200){
      setMovies(response.data.results);
      setIsPage(response.data.page);
      setIsTotalPages(response.data.total_pages);
    }
    else setIsError(true);
    setIsLoading(false);
  }

  // Load before render
  useMemo(() => {
    apiCalling();
  }, []);

  // SearchField component
  const [searchTerm, setSearchTerm] = useState("");

  async function handleSearch(query) {
    setSearchTerm(query);
    const response = await apiSearch(query);
    if (response.status === 200){
      setMovies(response.data.results);
      setIsPage(response.data.page);
      setIsTotalPages(response.data.total_pages);
    }
  }

  async function handlePages( page ){
    const response = await paginationCalling(searchTerm, page)
    if (response.status === 200){
      setMovies(response.data.results);
      setIsPage(response.data.page);
    } 
  }

  return (
    <>
      <NavComp />
      <SearchField searchTerm={searchTerm} handleSearch={handleSearch} />
      {
        !isLoading
          ? !isError
            ? movies.length > 0
              ? <PaginationComp isPage={isPage} isTotalPages={isTotalPages} handlePages={handlePages} />
              : ''
            : ''
          : ''
      }
      {/* <PaginationComp isPage={isPage} isTotalPages={isTotalPages} handlePages={handlePages} /> */}
      {!isLoading ? (
        !isError ? (
          movies.length > 0 ? (
            <div className="container my-0 d-flex flex-wrap justify-content-center">
              <MovieCard movies={movies} />
            </div>
          ) : <NoMoviesAlert />
        ) : <ErrorCard />
      ) : <LoadingSpinner />
      }
    </>
  );
};

export default Home;
