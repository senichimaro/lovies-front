import React, { useMemo, 
  useEffect 
} from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { 
  // configCalling, 
  // apiCalling,
  // configInit
} from './App/services/service'
import axios from "axios";
import { useDispatch } from 'react-redux';
import { setImages, setTrending, setGenre } from './App/Redux/reducers/MovieConfig'

// import pages
import Home from './App/pages/Home'

const App = () => {
  // Initialize config Data
  const dispatch = useDispatch()
  
  const configInit = async () => {
    const configs = await axios(
      process.env.REACT_APP_CONFIGS_API
    );
    if (configs.status === 200) dispatch( setImages(configs.data.images) );
  
    const trendings = await axios(
      process.env.REACT_APP_TRENDIG_API
    );
    if (trendings.status === 200) dispatch( setTrending(trendings.data.results) );

    const genre = await axios(
      process.env.REACT_APP_GENRE_API
    );
    console.log("genre",genre)
    if (genre.status === 200) dispatch( setGenre(genre.data.genres) );

  }
  
  useMemo(() => {
    configInit()
  }, []);

  return (
    <Router>
      
      <Switch>

        <Route exact path='/' component={Home} />

      </Switch>
    </Router>
  );
}

export default App;
