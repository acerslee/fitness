import { createSlice } from '@reduxjs/toolkit'

export interface AuthState {
  authState: boolean
  userId: string
}

const initialState: AuthState = {
  authState: false,
  userId: '',
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // Action to set the authentication status
    setAuthState(state, action) {
      state.authState = action.payload
    },
    setAuthUserId(state, action) {
      state.userId = action.payload
    },
  },
})

export const { setAuthState, setAuthUserId } = authSlice.actions
export default authSlice.reducer
