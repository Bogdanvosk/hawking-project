import React, { useState } from 'react'
import { TViewMode } from '../../types'

import styles from './ViewButtons.module.scss'
import { useAppDispatch, useAppSelector } from "../../store/hooks/hooks";
import { setViewMode } from "../../store/features/catalog/flatsSlice";

const ViewButtons = () => {
	const { viewMode } = useAppSelector(({ flats }) => flats)
	const dispatch = useAppDispatch()

	const handleViewButtonClick = (viewModeArg: TViewMode) => {
		dispatch(setViewMode(viewModeArg))
	}

	return (
		<div className={styles.container}>
			<div className={styles.viewButtons}>
				<button
					className={`${styles.viewButton} ${
						viewMode === 'Список' ? styles.active : ''
					}`}
					onClick={() => handleViewButtonClick('Список')}>
					<svg
						width='15'
						height='15'
						viewBox='0 0 15 15'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'>
						<rect
							y='0.5'
							width='14.5036'
							height='3.22302'
							rx='1'
							fill={viewMode === 'Список' ? '#664ef9' : '#bdbdbd'}
						/>
						<rect
							y='11.2773'
							width='14.5036'
							height='3.22302'
							rx='1'
							fill={viewMode === 'Список' ? '#664ef9' : '#bdbdbd'}
						/>
						<rect
							y='5.88867'
							width='14.5036'
							height='3.22302'
							rx='1'
							fill={viewMode === 'Список' ? '#664ef9' : '#bdbdbd'}
						/>
					</svg>
					<span>Список</span>
				</button>
				<button
					className={`${styles.viewButton} ${
						viewMode === 'Плитки' ? styles.active : ''
					}`}
					onClick={() => handleViewButtonClick('Плитки')}>
					<svg
						width='15'
						height='14'
						viewBox='0 0 15 14'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'>
						<rect
							x='0.00390625'
							width='5.44444'
							height='5.44444'
							rx='1'
							fill={viewMode === 'Плитки' ? '#664ef9' : '#bdbdbd'}
						/>
						<rect
							x='0.00390625'
							y='8.55469'
							width='5.44444'
							height='5.44444'
							rx='1'
							fill={viewMode === 'Плитки' ? '#664ef9' : '#bdbdbd'}
						/>
						<rect
							x='8.55957'
							width='5.44444'
							height='5.44444'
							rx='1'
							fill={viewMode === 'Плитки' ? '#664ef9' : '#bdbdbd'}
						/>
						<rect
							x='8.55957'
							y='8.55469'
							width='5.44444'
							height='5.44444'
							rx='1'
							fill={viewMode === 'Плитки' ? '#664ef9' : '#bdbdbd'}
						/>
					</svg>
					<span>Плитки</span>
				</button>
			</div>
			<button className={styles.button}>
				<svg
					width='12'
					height='14'
					viewBox='0 0 12 14'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'>
					<path
						d='M10.2731 2.44186C9.24757 0.87907 7.55454 0 5.64989 0C3.76152 0 2.0685 0.87907 1.01036 2.44186C-0.0477828 3.97209 -0.291969 5.92558 0.359194 7.63488C0.538264 8.0907 0.815008 8.56279 1.17315 8.98605L5.29175 13.8372C5.38943 13.9349 5.4871 14 5.63361 14C5.78012 14 5.8778 13.9349 5.97547 13.8372L10.1104 8.98605C10.4685 8.56279 10.7615 8.10698 10.9243 7.63488C11.5755 5.92558 11.3313 3.97209 10.2731 2.44186ZM5.64989 8.20465C4.24989 8.20465 3.09408 7.04884 3.09408 5.64884C3.09408 4.24884 4.24989 3.09302 5.64989 3.09302C7.04989 3.09302 8.2057 4.24884 8.2057 5.64884C8.2057 7.04884 7.06617 8.20465 5.64989 8.20465Z'
						fill='#664EF9'
					/>
				</svg>
				Открыть карту
			</button>
		</div>
	)
}

export default ViewButtons
