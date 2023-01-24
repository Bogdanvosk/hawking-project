import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import { createAsyncThunk } from '@reduxjs/toolkit'

import { TCard } from '../../../types'
import axios from 'axios'

export interface NewsState {
	news: TCard[]
}

const initialState: NewsState = {
	news: []
}

export const newsSlice = createSlice({
	name: 'news',
	initialState,
	reducers: {
		getNews: (state: NewsState, action: PayloadAction<TCard[]>) => {
			state.news = action.payload
		}
	},
	extraReducers: builder => {
		// Add reducers for additional action types here, and handle loading state as needed
		builder.addCase(fetchNews.fulfilled, (state, action) => {
			// Add user to the state array
			state.news = action.payload
		})
	}
})

export const fetchNews = createAsyncThunk('news/fetch', () => {
	return axios.get('http://localhost:3000/news').then(({ data }) => data)
})

export const { getNews } = newsSlice.actions

export default newsSlice.reducer
