import { configureStore } from '@reduxjs/toolkit'
import newsSlice from './features/news/newsSlice'
import flatsSlice from './features/catalog/flatsSlice'
// import logger from 'redux-logger'

import thunkMiddleware from 'redux-thunk'

export const setupStore = () => {
	return configureStore({
		reducer: {
			news: newsSlice,
			flats: flatsSlice
		},
		middleware: getDefaultMiddleware =>
			getDefaultMiddleware().concat(thunkMiddleware)
	})
}

export const store = setupStore()

export type RootState = ReturnType<typeof store.getState>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
