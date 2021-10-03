import axios from "axios";
import * as Realm from "realm-web";

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

// mockup function
export async function realmInit(userID) {
  const app = new Realm.App({ id: process.env.REACT_APP_REALM_ID });
  const credentials = Realm.Credentials.anonymous();
  try {
    const conn = await app.logIn(credentials);
    const user = await conn.functions.getOneUser(userID);
    return user;
  } catch (e) {
    throw new Error(`Failed to Login : ${e.message}`);
  }
}

// save user in mongodb
export async function postUser( userObj ) {
  const app = new Realm.App({ id: process.env.REACT_APP_REALM_ID });
  const credentials = Realm.Credentials.anonymous();
  try {
    const conn = await app.logIn(credentials);
    const user = await conn.functions.postUser(userObj);
    return user;
  } catch (e) {
    throw new Error(`Failed to Login : ${e.message}`);
  }
}

// find user in mongodb database
export async function findUserByEmail( email ) {
  const app = new Realm.App({ id: process.env.REACT_APP_REALM_ID });
  const credentials = Realm.Credentials.anonymous();
  try {
    const conn = await app.logIn(credentials);
    const user = await conn.functions.findUser(email);
    return user;
  } catch (e) {
    throw new Error(`ERROR in service findUserByEmail : ${e.message}`);
  }
}

// save movie in mongodb
export async function saveMovie( userObj ) {
  const app = new Realm.App({ id: process.env.REACT_APP_REALM_ID });
  const credentials = Realm.Credentials.anonymous();
  try {
    const conn = await app.logIn(credentials);
    const user = await conn.functions.postUser(userObj);
    return user;
  } catch (e) {
    throw new Error(`Failed to Login : ${e.message}`);
  }
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
