import { createSlice } from '@reduxjs/toolkit'

type DummyState = {
  value: number
}

const initialState = {
  value: 0,
} as DummyState

export const slice = createSlice({
  name: 'dummy',
  initialState,
  reducers: {
    reset: () => initialState,
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
  },
})

export const { actions: dummyActions } = slice
export default slice.reducer
