import { useEffect } from 'react'
import { useMatches } from 'react-router-dom'
import useReactRouterBreadcrumbs from 'use-react-router-breadcrumbs'
import breadcrumbsIcon from '../../assets/icons/breadcrumbs-icon.svg'
import Container from '../Container/Container'

import styles from './Breadcrumbs.module.scss'

const Breadcrumbs = () => {
	const matches = useMatches()

	const title = matches[0].pathname.split('/')[1]
	const id = matches[0].pathname.split('/')[2]

	const handleTitle = () => {
		switch (title) {
			case "news":
				return "Новости"
			
			default:
				break;
		}
	}

	return (
		<Container>
			<div className={styles.breadcrumbs}>
				<img src={breadcrumbsIcon} alt='' />
				<span className={styles.circle}></span>

				<ul className={styles.list}>
					{/* {breadcrumbs.map(({ breadcrumb }) => breadcrumb)} */}
					<li className={styles.item}>{handleTitle()}</li>
				</ul>
			</div>
		</Container>
	)
}

export default Breadcrumbs
