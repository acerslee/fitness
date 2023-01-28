import { configureStore } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'

import authReducer from './authSlice'
import userdataReducer from './userDataSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userdataReducer,
  },
  devTools: true,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

const makeStore = () => store

export const wrapper = createWrapper(makeStore)
