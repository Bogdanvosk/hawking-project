import { useState } from "react";

export const usePagination = (itemsPerPage: number, items: any[]) => {
	const [itemOffset, setItemOffset] = useState(0)

	if (items.length < itemsPerPage) itemsPerPage = items.length

	const endOffset = itemOffset + itemsPerPage
	const currentItems = items.slice(itemOffset, endOffset)
	const pageCount = Math.ceil(items.length / itemsPerPage)

	const executeScroll = () =>
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		})

	const handlePageClick = (event: { selected: number }) => {
		const newOffset = (event.selected * itemsPerPage) % items.length
		setItemOffset(newOffset)

		executeScroll()
	}

	return {currentItems, pageCount, handlePageClick}
}
