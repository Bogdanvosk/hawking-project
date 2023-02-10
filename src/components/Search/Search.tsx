import React, { useState } from 'react'

import styles from './Search.module.scss'

import searchSvg from '../../assets/icons/search.svg'

const Search = ({
	setSearchParam
}: {
	setSearchParam: (input: string) => void
}) => {
	const [input, setInput] = useState<string>('')

	const handleSearch = (e: React.FormEvent) => {

		e.preventDefault()

		setSearchParam(input)
	}

	return (
		<>
			<div className={styles.container}>
				<form onSubmit={handleSearch}>
					<input
						value={input}
						className={styles.input}
						type='text'
						placeholder='Поиск по статьям'
						onChange={e => setInput(e.target.value)}
					/>
					<button className={styles.button}>
						<img src={searchSvg} alt='Search' />
					</button>
				</form>
			</div>
		</>
	)
}

export default Search
