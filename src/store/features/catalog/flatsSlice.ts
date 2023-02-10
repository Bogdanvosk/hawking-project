import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TFilterObj, TFlatProps, TSortType, TViewMode } from '../../../types'
import axios from 'axios'
import { byField } from '../../../utils/sort'

import {cloneDeep} from 'lodash'

export interface FlatsState {
	flats: TFlatProps[]
	isLoading: boolean
	error: boolean
	viewMode: TViewMode
	sortType: TSortType
	filter: TFilterObj
}

const initialState: FlatsState = {
	flats: [],
	isLoading: false,
	error: false,
	viewMode: 'Плитки',
	sortType: 'По умолчанию',
	filter: {
		rooms: null,
		bedrooms: null,
		price: null,
		district: null,
		subway: null
	}
}

export const flatsSlice = createSlice({
	name: 'flats',
	initialState,
	reducers: {
		setViewMode: (state: FlatsState, action: PayloadAction<TViewMode>) => {
			state.viewMode = action.payload
		},
		setSortType: (state: FlatsState, action: PayloadAction<TSortType>) => {
			state.sortType = action.payload

			if (action.payload === 'По цене') state.flats.sort(byField('price'))
			if (action.payload === 'По количеству комнат')
				state.flats.sort(byField('roomsCount'))
			if (action.payload === 'По умолчанию')
				state.flats.sort(byField('id'))
		},
		setFilter: (state: FlatsState, action: PayloadAction<TFilterObj>) => {
			state.filter = cloneDeep(action.payload)
		}
	},
	extraReducers: builder => {
		builder.addCase(fetchFlats.pending, (state: FlatsState) => {
			state.isLoading = true
		})

		builder.addCase(
			fetchFlats.fulfilled,
			(state: FlatsState, action: PayloadAction<TFlatProps[]>) => {
				state.flats = action.payload
				state.isLoading = false
			}
		)

		builder.addCase(fetchFlats.rejected, (state: FlatsState) => {
			state.error = true
		})
	}
})

export const fetchFlats = createAsyncThunk('flats/fetch', () => {
	return axios.get('http://localhost:3000/flats').then(({ data }) => data)
})

export const { setViewMode, setSortType } = flatsSlice.actions

export default flatsSlice.reducer
