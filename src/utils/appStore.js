import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice'
import feedReducer from "./feedSlice"
import connectionReducer from "./connectionSlice"
import requestReducer from "./requestSlice";

const store = configureStore({
    reducer : {
        user : userReducer,
        feed : feedReducer,
        connetions : connectionReducer,
        requests : requestReducer,
    },
})

export default store;