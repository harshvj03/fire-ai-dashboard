import { createSlice } from '@reduxjs/toolkit'

export interface ThemeState {
  mode: string
}

const initialState: ThemeState = {
  mode: 'dark',
}

export const themeSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    updateTheme: (state, action) => {
      state.mode = action.payload
    },
    
  },
})

// Action creators are generated for each case reducer function
export const { updateTheme } = themeSlice.actions

export default themeSlice.reducer