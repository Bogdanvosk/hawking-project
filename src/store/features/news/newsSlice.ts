import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

import { TCard } from '../../../types'
import axios from 'axios'

export interface NewsState {
	news: TCard[],
	error: boolean,
	isLoading: boolean
}

const initialState: NewsState = {
	news: [],
	error: false,
	isLoading: false
}

export const newsSlice = createSlice({
	name: 'news',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder.addCase(fetchNews.pending, (state: NewsState) => {
			state.isLoading = true
		})

		builder.addCase(fetchNews.fulfilled, (state: NewsState, action: PayloadAction<TCard[]>) => {
				state.news = action.payload
				state.isLoading = false
			}
		)

		builder.addCase(fetchNews.rejected, (state: NewsState) => {
			state.error = true
		})

		builder.addCase(searchNews.pending, (state: NewsState) => {
			state.isLoading = true
		})

		builder.addCase(searchNews.fulfilled, (state: NewsState, action: PayloadAction<TCard[]>) => {
				state.news = action.payload
				state.isLoading = false
			}
		)

		builder.addCase(searchNews.rejected, (state: NewsState) => {
			state.error = true
		})
	}
})

export const fetchNews = createAsyncThunk('news/fetch', () => {
	return axios.get('http://localhost:3000/news').then(({ data }) => data)
})

export const searchNews = createAsyncThunk(
	'news/search',
	(searchParam: string | null) => {
		return axios
			.get(`http://localhost:3000/news?q=${searchParam}`)
			.then(({ data }) => data)
	}
)

export default newsSlice.reducer
