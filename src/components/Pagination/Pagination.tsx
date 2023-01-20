import React from 'react'
import ReactPaginate from 'react-paginate'
import { TPaginationProps } from '../../types'

import styles from './Pagination.module.scss'

const Pagination = ({ pageCount, handlePageClick }: TPaginationProps) => {
	return (
		<ReactPaginate
			className={styles.paginateContainer}
			pageLinkClassName={styles.paginateLink}
			activeLinkClassName={styles.paginateActiveLink}
			breakLabel='...'
			nextLabel={null}
			onPageChange={handlePageClick}
			pageRangeDisplayed={5}
			pageCount={pageCount}
			previousLabel={null}
		/>
	)
}

export default Pagination
