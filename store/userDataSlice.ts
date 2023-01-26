import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface UserState {
  username: string
  email: string
}

const initialState: UserState = {
  username: '',
  email: '',
}

export const userdataSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUsername(state, action: PayloadAction<string>) {
      state.username = action.payload
    },
  },
})

export const { setUsername } = userdataSlice.actions
export default userdataSlice.reducer
