import axios from 'axios'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import {
	Breadcrumbs,
	Cards,
	Container,
	Layout,
	Search,
	Title,
	Pagination
} from '../../components'
import { TCard, TComponentWithPagination } from '../../types'

import styles from './News.module.scss'

const News = ({ itemsPerPage }: TComponentWithPagination) => {
	let [searchParams, setSearchParams] = useSearchParams()

	const [news, setNews] = useState<TCard[]>([])
	const [searchParam, setSearchParam] = useState<string>('')

	useEffect(() => {
		const paramValue = searchParams.get('search')

		if (paramValue) {
			setSearchParam(paramValue)
		}

		axios
			.get('http://localhost:3000/news')
			.then(({ data }) => setNews(data))
	}, [])

	useEffect(() => {
		axios
			.get(`http://localhost:3000/news?q=${searchParam}`)
			.then(({ data }) => setNews(data))

		setSearchParams(`search=${searchParam}`)
	}, [searchParam])

	const [itemOffset, setItemOffset] = useState(0)

	if (news.length < itemsPerPage) itemsPerPage = news.length

	const endOffset = itemOffset + itemsPerPage
	const currentNews = news.slice(itemOffset, endOffset)
	const pageCount = Math.ceil(news.length / itemsPerPage)

	const handlePageClick = (event: { selected: number }) => {
		const newOffset = (event.selected * itemsPerPage) % news.length
		setItemOffset(newOffset)

		executeScroll()
	}

	const executeScroll = () =>
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		})

	return (
		<Layout>
			<div className={styles.news}>
				<Container>
					<Breadcrumbs />
					<div className={styles.newsHead}>
						<Title size={30}>Новости</Title>
						<Search setSearchParam={setSearchParam} />
					</div>
					<Cards news={currentNews} />
					<Pagination
						pageCount={pageCount}
						handlePageClick={handlePageClick}
					/>
				</Container>
			</div>
		</Layout>
	)
}

export default News
