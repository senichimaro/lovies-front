import axios from "axios";

// Custom Error Data
const data = {
  status: 406,
  error: true,
  message: "Service-Custom-Backend: 406 Not Acceptable | API call error",
};

// movie search in API database
export async function apiSearch(query) {
  if ( query ){
    const response = await axios(
      process.env.REACT_APP_SEARCH_API + `&query=${query}`
    );
    // console.log("apiSearch response", response)
    if (response.status === 200) return response;
    else return data;
  }
  else return data
}

// retrieve initial pages
export async function getApiData( page ) {
  let url = process.env.REACT_APP_TRENDIG_API
  if ( page ) url = process.env.REACT_APP_TRENDIG_API + '&page=' + page
  const response = await axios(
    url
  );
  // console.log("service getApiData > response", response);
  if (response.status === 200) return response;
  else return data;
}

// pagination function to retrieve selected pages from a specific search term
export async function paginationCalling( query, page ) {
  let response;
  if ( query ){
    // console.log("paginationCalling query", query)
    response = await axios(
      `${process.env.REACT_APP_SEARCH_API}&query=${query}&page=${page}`
    )
    if (response.status === 200) return response;
    else return data;
  }
  else if ( page ){
    response = await getApiData( page )
    if (response.status === 200) return response;
    else return data;
  }
  else return data
}

// search movie functionality
export async function findMovie( movieID ){
  let response = {}
  try {
    const parseID = parseInt(movieID)
    if ( isNaN( parseID ) ) return data
    response = await axios(`${process.env.REACT_APP_FIND_MOVIE_API}${parseID}${process.env.REACT_APP_MOVIE_API_CONFIG}`)
  }
  catch (e) {
    response = data;
    response.status = e.response.status
  }
  finally {
    return response
  }
}

// get movies from proper collection
export async function findMovieCollection( email ) {
  try {
    const response = await axios({
      method: 'POST',
      url: `${process.env.REACT_APP_BACKEND_BASEURL}/find-favorites`,
      withCredentials: false,
      data: {email:email}
      // data: {email:email},
      // headers: {
      //   Authorization: 'Bearer'
      // }
    })

    return response

  } catch (e) {
    throw new Error(`ERROR in service findMovieCollection : ${e.message}`);
  }
}

// add movies to proper collection
export async function addMovieCollection(email, movie_id, coll) {
  try {
    const response = await axios({
      method: 'POST',
      url: `${process.env.REACT_APP_BACKEND_BASEURL}/add-favorites`,
      withCredentials: false,
      data: {email:email, movie_id:movie_id, coll:coll}
    })
    return response
  } catch (e) {
    throw new Error(`ERROR in service saveMovieInCollection : ${e.message}`);
  }
}
