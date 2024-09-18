import {configureStore} from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import counterReducer from './components/Counter';
import { apiSlice } from './slices/apiSlice';



const store = configureStore({
   reducer: {
      auth: authReducer,
      [apiSlice.reducerPath]: apiSlice.reducer,
      counter: counterReducer
   },
   middleware: (getDefaultMiddleware)=>
       getDefaultMiddleware().concat(apiSlice.middleware),
      devTools: true,
});

export default store;

