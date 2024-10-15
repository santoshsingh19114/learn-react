import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice/'
import { Provider } from 'react-redux'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})


// create store
// wrap app component under Provider
// create Slice
// register reducer in store 
