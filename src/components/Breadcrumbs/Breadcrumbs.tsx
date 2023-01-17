import { useEffect } from 'react'

import { Link, useLocation, useMatches } from 'react-router-dom'
import breadcrumbsIcon from '../../assets/icons/breadcrumbs-icon.svg'
import Container from '../Container/Container'

import styles from './Breadcrumbs.module.scss'

const Breadcrumbs = () => {
	let matches = useMatches()
	// console.log(matches)

	// let crumbs = matches
	// 	// first get rid of any matches that don't have handle and crumb
	// 	.filter(match => Boolean(match.handle?.crumb))
	// // 	// now map them into an array of elements, passing the loader
	// // 	// data to each one
	// 	.map(match => match.handle?.crumb(match.data))

	return (
		<Container>
			<div className={styles.breadcrumbs}>
				<Link to='/'>
					<img src={breadcrumbsIcon} alt='' />
				</Link>
				<span className={styles.circle}></span>

				<ul className={styles.list}>
					{/* <li className={styles.item}>{}</li> */}
				</ul>
			</div>
		</Container>
	)
}

export default Breadcrumbs
