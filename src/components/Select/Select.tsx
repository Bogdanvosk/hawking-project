import { CSSProperties, useState } from 'react'

import styles from './Select.module.scss'
import { TDistrict, TFilter, TFilterObj, TSortType, TSubway } from '../../types'
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks'
import { setSortType } from '../../store/features/catalog/flatsSlice'

type TSelectProps = {
	items:
		| TSortType[]
		| TFilter[]
		| TSubway[]
		| TDistrict[]
		| number[]
		| string[]
	style?: CSSProperties
	title?: string
	withIcon?: boolean
}

type selectedItem = TSortType | TFilter | TSubway | TDistrict | number

type TFilterItem = number | [number, number] | TSubway | TDistrict | null

const Select = ({ items, style, title, withIcon = false }: TSelectProps) => {
	const { sortType } = useAppSelector(({ flats }) => flats)
	const dispatch = useAppDispatch()

	const [selectIsOpen, setSelectIsOpen] = useState<boolean>(false)

	const [filter, setFilter] = useState<TFilterItem[]>([])

	const handleLabelClick = () => {
		setSelectIsOpen(prev => !prev)
	}

	const handleTypeClick = (selectedItem: selectedItem) => {
		dispatch(setSortType(selectedItem as TSortType))
		setSelectIsOpen(false)
	}

	return (
		<div className={styles.sortContainer}>
			<div
				style={style}
				className={styles.sortLabel}
				onClick={handleLabelClick}>
				<div className={styles.left}>
					{withIcon && (
						<svg
							className={styles.sortIcon}
							width='15'
							height='16'
							viewBox='0 0 15 16'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'>
							<g clipPath='url(#clip0_2831_2828)'>
								<g opacity={selectIsOpen ? '1' : '0.6'}>
									<path
										d='M7.32328 6.74139H11.4807C11.5823 6.74139 11.6647 6.65952 11.6647 6.55807V4.37278C11.6647 4.27148 11.5826 4.18945 11.4807 4.18945H7.32328C7.22199 4.18945 7.13965 4.27133 7.13965 4.37278V6.55822C7.13965 6.65952 7.22183 6.74139 7.32328 6.74139Z'
										fill={
											selectIsOpen ? '#664EF9' : '#7A7F86'
										}
									/>
									<path
										d='M7.32328 3.07178H9.67264C9.77393 3.07178 9.85627 2.9896 9.85627 2.88815V0.703167C9.85627 0.601561 9.77424 0.519531 9.67264 0.519531H7.32328C7.22199 0.519531 7.13965 0.601406 7.13965 0.703167V2.88815C7.13965 2.9896 7.22183 3.07178 7.32328 3.07178Z'
										fill={
											selectIsOpen ? '#664EF9' : '#7A7F86'
										}
									/>
									<path
										d='M7.32328 11.1105H13.0685C13.1696 11.1105 13.252 11.0287 13.252 10.9272V8.74223C13.252 8.64093 13.1699 8.55859 13.0685 8.55859H7.32328C7.22199 8.55859 7.13965 8.64078 7.13965 8.74223V10.9272C7.13965 11.0285 7.22183 11.1105 7.32328 11.1105Z'
										fill={
											selectIsOpen ? '#664EF9' : '#7A7F86'
										}
									/>
									<path
										d='M14.6558 12.9297H7.32328C7.22199 12.9297 7.13965 13.0114 7.13965 13.1135V15.2981C7.13965 15.3994 7.22183 15.4818 7.32328 15.4818H14.656C14.7573 15.4818 14.8394 15.3996 14.8394 15.2981V13.1132C14.8393 13.0114 14.7574 12.9297 14.6558 12.9297Z'
										fill={
											selectIsOpen ? '#664EF9' : '#7A7F86'
										}
									/>
									<path
										d='M6.08742 10.6908H4.84283V0.81072C4.84283 0.639047 4.70363 0.5 4.53211 0.5H2.02615C1.85464 0.5 1.71543 0.639047 1.71543 0.81072V10.6908H0.471C0.351218 10.6908 0.24231 10.7597 0.190731 10.8676C0.138996 10.9755 0.153755 11.1033 0.228639 11.1965L3.03692 15.3841C3.09596 15.4577 3.18498 15.5 3.27913 15.5C3.37328 15.5 3.46215 15.4577 3.52118 15.3841L6.32947 11.1965C6.40435 11.1032 6.41927 10.9755 6.36753 10.8676C6.31595 10.7598 6.2072 10.6908 6.08742 10.6908Z'
										fill={
											selectIsOpen ? '#664EF9' : '#7A7F86'
										}
									/>
								</g>
							</g>
							<defs>
								<clipPath id='clip0_2831_2828'>
									<rect
										width='15'
										height='15'
										fill='white'
										transform='translate(0 0.5)'
									/>
								</clipPath>
							</defs>
						</svg>
					)}

					<span>{sortType}</span>
				</div>
				<svg
					className={`${styles.sortArrow} ${
						selectIsOpen && styles.rotated
					}`}
					width='20'
					height='20'
					viewBox='0 0 20 20'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'>
					<path
						d='M5 7.5L10 12.5L15 7.5'
						stroke='#664EF9'
						strokeWidth='2'
						strokeLinecap='round'
						strokeLinejoin='round'
					/>
				</svg>
			</div>
			<div
				className={`${styles.sortSelect} ${
					selectIsOpen && styles.show
				}`}>
				<ul>
					{items.map((item, idx) => {
						return (
							<li
								onClick={() =>
									handleTypeClick(item as selectedItem)
								}
								key={idx}
								
							>{item}</li>
						)
					})}
				</ul>
			</div>
		</div>
	)
}

export default Select
