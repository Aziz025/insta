import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import jwt_decode from 'jwt-decode'
import { END_POINT } from '@/config/end-point'

const token = localStorage.getItem("token")
const decodedToken = jwt_decode(token)
let initialState = {
  isAuth: false,
  currentUser: null,
  tokenExt: 0
}

if(token) {
  const decodedToken = jwt_decode(token)
  if(decodedToken.exp * 1000 > Date.now()) {
    initialState = {
      isAuth: true,
      currentUser: {
        id: decodedToken.id,
        email: decodedToken.email,
        full_name: decodedToken.full_name,
        username: decodedToken.username
      },
      tokenExt: decodedToken.exp
    }

    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
  }else {
    localStorage.removeItem("token")
  }
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authorize: (state, action) => {
      localStorage.setItem("token", action.payload.token)
      axios.defaults.headers.common['Authorization'] = `Bearer ${action.payload.token}`
      const decoded = jwt_decode(action.payload.token)
        state.currentUser = {
          id: decoded.id,
          email: decoded.email,
          full_name: decoded.full_name,
          username: decoded.username
        }
        state.isAuth = true
        state.tokenExt = decoded.exp

        state.tokenExt = decoded.exp
    },
    logOut: (state) => {
      state.isAuth = false
      state.currentUser = null
      state.exp = 0
      localStorage.removeItem("token")
    },
  },
})

// Action creators are generated for each case reducer function
export const { authorize, logOut } = authSlice.actions

export const signIn = (email, password) => (dispatch) => {
  axios.post(`${END_POINT}/api/auth/signin` , {
    email,
    password
  }).then(res => {
    dispatch(authorize(res.data))
  })
}

export const signUp = (email, full_name, username, password, router) => (dispatch) => {
  axios.post(`${END_POINT}/api/auth/signup`, {
    email,
    full_name,
    username,
    password
  })
  router.push("/login")
}

export default authSlice.reducer