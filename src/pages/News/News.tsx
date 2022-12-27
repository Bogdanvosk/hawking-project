import axios from 'axios'
import { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'
import {
	Breadcrumbs,
	Cards,
	Container,
	Layout,
	Search,
	Title
} from '../../components'
import { TCard, TNewsProps } from '../../types'

import styles from './News.module.scss'

const News = ({ itemsPerPage }: TNewsProps) => {
	const [news, setNews] = useState<TCard[]>([])

	useEffect(() => {
		axios
			.get('http://localhost:3000/news')
			.then(({ data }) => setNews(data))
	}, [])

	const [itemOffset, setItemOffset] = useState(0)

	const endOffset = itemOffset + itemsPerPage
	const currentNews = news.slice(itemOffset, endOffset)
	const pageCount = Math.ceil(news.length / itemsPerPage)

	const handlePageClick = (event: { selected: number }) => {
		const newOffset = (event.selected * itemsPerPage) % news.length
		setItemOffset(newOffset)
	}

	return (
		<Layout>
			<Container>
				<div className={styles.news}>
					<Breadcrumbs />
					<div className={styles.newsHead}>
						<Title size={30}>Новости</Title>
						<Search />
					</div>
					<Cards news={currentNews} />
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
				</div>
			</Container>
		</Layout>
	)
}

export default News
