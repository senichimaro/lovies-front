import { configureStore } from "@reduxjs/toolkit";
import MovieConfigReducer from "../reducers/MovieConfig";

export default configureStore({
    reducer: {
        config: MovieConfigReducer
    }
})