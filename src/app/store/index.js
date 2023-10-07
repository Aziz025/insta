import { configureStore } from '@reduxjs/toolkit'
import authReducer from './slices/authSlice'
import postReducer from './slices/postSlices'

export default configureStore({
  reducer: {
    auth: authReducer,
    post: postReducer
  },
})