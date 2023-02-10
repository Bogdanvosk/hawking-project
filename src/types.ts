import React from 'react'

export type TTitle = {
	size: number
	children: React.ReactNode
}

export type TCard = {
	id?: number
	imgSrc: string
	title: string
	text: string
	date: string
}

export type TComponentWithPagination = {
	itemsPerPage: number
}

export type TModalProps = {
	setIsModalOpen: (state: boolean) => void
	title: string
	text: string
	buttonText: string
}

export type TFlatProps = {
	id?: number
	img: string
	price: number
	roomsCount: number
	bedroomCount: number
	address: TAddress
	stuff: string[]
	owner: TOwner
}

type TAddress = {
	city: string
	street: string
	number: number
	subway: string
	district: string
}

type TOwner = {
	name: string
	img: string
	phoneNumber: string
	links: TLinks
}

type TLinks = {
	website: string
	vk: string
	telegram: string
	email: string
}

export type TPaginationProps = {
	pageCount: number
	handlePageClick: (event: { selected: number }) => void
}

export type TViewMode = 'Список' | 'Плитки'

export type TSortType = 'По умолчанию' | 'По цене' | 'По количеству комнат'

export type TFilter = '1 комн.' | '2 комн.' | '3 комн.' | '4 комн.' | '5 комн.'

export type TSubway =
	| 'Грушевка'
	| 'Московская'
	| 'Нью-Йоркская'
	| 'Крутецкая'
	| 'Смешная'
	| 'Позорная'

export type TDistrict =
	| 'Шабаны'
	| 'Октябрьский'
	| 'Приморский'
	| 'Заморский'
	| 'Глухой'
	| 'Далеко'

export type TFilterObj = {
	rooms: number | null
	price: [number, number] | null
	bedrooms: number | null
	district: TDistrict | null
	subway: TSubway | null
}
