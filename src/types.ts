import React from 'react'

interface HeaderListItem {
	id: number
	listNumber: number
	text: string
	icon?: React.ReactElement
	frontIcon?: boolean
}

export type HeaderList = HeaderListItem[]

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
