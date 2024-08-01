import { configureStore } from "@reduxjs/toolkit";
import rootReducer from './reducers/index'
import { thunk } from "redux-thunk";

export default configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk)
})
