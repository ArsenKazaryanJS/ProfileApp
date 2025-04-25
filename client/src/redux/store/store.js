import {configureStore} from '@reduxjs/toolkit'
import authReducer from '../slices/authSlice.js'
import usersReducer from '../slices/usersSlices.js'

export const store = configureStore({
    reducer:{
        auth:authReducer, 
        users:usersReducer
    }
})