import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { QueryClient, QueryClientProvider } from 'react-query'

// Redux configs
import { Provider } from 'react-redux'
import movieConfigStore from './App/Redux/store/MovieConfigStore'

// import css
import './App/assets/css/globals.css'
// import 'bootswatch/dist/united/bootstrap.min.css'
import 'bootswatch/dist/vapor/bootstrap.min.css'

const queryClient = new QueryClient()

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <Provider store={movieConfigStore}>
      <App />
    </Provider>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
