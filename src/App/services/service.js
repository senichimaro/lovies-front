import axios from "axios";
import * as Realm from "realm-web";
import { useDispatch } from 'react-redux';
import { setImages, setTrending } from '../Redux/reducers/MovieConfig'

export async function apiSearch(query) {
  const response = await axios(
    `https://api.themoviedb.org/3/search/movie?api_key=fded687d14e48654e543b7ecfaea42cc&language=en-US&query=${query}&page=1&include_adult=false`
  );
  // console.log("response", response)
  const data = {
    status: 406,
    error: true,
    message: "Service-Custom-Backend: 406 Not Acceptable | API call error",
  };
  if (response.status === 200) return response.data.results;
  else return data;
}

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

// export async function configCalling() {
//   const response = await axios(
//     `https://api.themoviedb.org/3/configuration?api_key=fded687d14e48654e543b7ecfaea42cc`
//   );
//   console.log("response.data.images", response.data.images)
//   // if (response.status === 200) setConfig_path(response.data.images);
//   // else setIsError(true);
// }

// export async function apiCalling() {
//   const response = await axios(
//     `https://api.themoviedb.org/3/trending/movie/week?api_key=fded687d14e48654e543b7ecfaea42cc`
//   );
//   console.log("response.data.results", response.data.results);
//   // if (response.status === 200) setMovies(response.data.results);
//   // else setIsError(true);
//   // setIsLoading(false);
// }

