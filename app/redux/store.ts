import { configureStore } from '@reduxjs/toolkit'
import dummyReducer from '@/app/[lang]/(site)/slices'

export const store = configureStore({
  reducer: {
    dummyReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
