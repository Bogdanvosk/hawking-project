import React, { useState } from 'react'

import styles from './Search.module.scss'

import searchSvg from '../../assets/icons/search.svg'

const Search = () => {
	const [input, setInput] = useState('')

	return (
		<>
			<div className={styles.container}>
				<input
					className={styles.input}
					type='text'
					placeholder='Поиск по статьям'
				/>
				<button className={styles.button}>
					<img src={searchSvg} alt='Search' />
				</button>
			</div>
		</>
	)
}

export default Search
