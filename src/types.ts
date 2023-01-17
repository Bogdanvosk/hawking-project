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

export type TNewsProps = {
	itemsPerPage: number
}

export type TModalProps = {
	setIsModalOpen: (state: boolean) => void
	title: string
	text: string
	buttonText: string
}
