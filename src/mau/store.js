import { configureStore } from "@reduxjs/toolkit";
// import userSlice from "../slices/userSlice";
import dataAdd from "../mau/reducers/dataAdd";

const rootReducer = {
    // user: userSlice,
    dataAdd: dataAdd,
};

const store = configureStore({
    reducer: rootReducer,
});

export default store;