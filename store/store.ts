import { configureStore } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'

import authReducer from './authSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  devTools: true,
})

const makeStore = () => store

export const wrapper = createWrapper(makeStore)
