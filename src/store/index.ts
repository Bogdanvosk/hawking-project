import { configureStore } from '@reduxjs/toolkit'
import newsSlice from './features/news/newsSlice'
import logger from 'redux-logger'

import thunkMiddleware from 'redux-thunk'

export const store = configureStore({
	reducer: {
		news: newsSlice
	},
	middleware: [thunkMiddleware, logger]
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
