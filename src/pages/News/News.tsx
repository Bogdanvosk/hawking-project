import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Breadcrumbs, Cards, Container, Layout, Pagination, Search, Title } from '../../components'
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks'
import { RootState } from '../../store'
import { fetchNews, searchNews } from '../../store/features/news/newsSlice'
import { TComponentWithPagination } from '../../types'

import styles from './News.module.scss'
import { usePagination } from "../../utils/usePagination";
import Skeleton from './Skeleton/Skeleton'

const News = ({ itemsPerPage }: TComponentWithPagination) => {
	let [searchParams, setSearchParams] = useSearchParams()

	const { news, isLoading, error } = useAppSelector((state: RootState) => state.news)
	const dispatch = useAppDispatch()

	const [searchParam, setSearchParam] = useState<string | null>('')

	useEffect(() => {
		const paramValue = searchParams.get('q')
		if (paramValue !== null) setSearchParam(paramValue)

		dispatch<any>(fetchNews())
	}, [])

	useEffect(() => {
		setSearchParams(`q=${searchParam}`)

		dispatch<any>(searchNews(searchParam))
	}, [searchParam])

	const { currentItems, pageCount, handlePageClick } = usePagination(itemsPerPage, news)

	return (
		<Layout>
			<div className={styles.news}>
				<Container>
					<Breadcrumbs/>
					<div className={styles.newsHead}>
						<Title size={30}>Новости</Title>
						<Search setSearchParam={setSearchParam}/>
					</div>
					{(isLoading && !error && <div className={styles.skeletonCards}>
							{Array(9).fill(0).map((_, idx) => {
								return (
									<Skeleton key={idx}/>
								)
							})}
						</div>
					)}
					{!error && currentItems && <Cards news={currentItems}/>}
					{currentItems.length === 0 && !error && <h2 className={styles.notFound}>Упс, ничего не найдено!</h2>}
					{error && <h2 className={styles.error}>Упс, произошла ошибка!</h2>}
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
