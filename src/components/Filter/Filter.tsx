import { CSSProperties, useState } from 'react'
import { TDistrict, TSubway } from '../../types'
import Select from '../Select/Select'

import styles from './Filter.module.scss'

type TFilterProps = {
	containerStyle?: CSSProperties
}

const Filter = ({ containerStyle }: TFilterProps) => {
	const subways: TSubway[] = [
		'Грушевка',
		'Московская',
		'Нью-Йоркская',
		'Крутецкая',
		'Смешная',
		'Позорная'
	]
	const districts: TDistrict[] = [
		'Шабаны',
		'Октябрьский',
		'Приморский',
		'Заморский',
		'Глухой',
		'Далеко'
	]

	const stuffList = [
		'Газовая плита',
		'Духовка',
		'Кофеварка',
		'Микроволновая печь',
		'Посуда',
		'Посудомоечная машина',
		'Огромный краб',
		'Веселый сосед',
		'Птица',
		'Золотой унитаз',
		'Дыра в потолке',
		'5мм пыли',
		'Труп мыши',
		'Ванная',
		'Душевая кабина',
		'Чайник',
		'Перекись водорода',
		'Лук',
		'DVD-проигрыватель',
		'Игровая приставка',
		'Сломанный телефон',
		'Портал на луну',
		'Делориан',
		'Холодильник',
		'Винный погреб',
		'Летучая мышь'
	]

	const bedrooms: number[] = [1, 2, 3, 4]

	const [stuffIsOpen, setStuffIsOpen] = useState(false)

	const handleOpenStuff = (e: React.FormEvent) => {
		e.preventDefault()
		setStuffIsOpen(prev => !prev)
	}

	return (
		<form className={styles.form}>
			<div
				className={styles.formContainer}
				style={containerStyle}>
				<div className={styles.inputContainer}>
					<label className={styles.roomsFilter}>
						<span className={styles.title}>Комнаты</span>
						<Select
							key='rooms'
							items={[
								'1 комн.',
								'2 комн.',
								'3 комн.',
								'4 комн.',
								'5 комн.'
							]}
							title='Выберите'
							style={{
								backgroundColor: '#F8F8F8',
								boxShadow: 'none',
								gap: '2.5rem'
							}}
							withIcon={false}
						/>
					</label>
				</div>
				<div className={styles.inputContainer}>
					<label className={styles.priceFilter}>
						<span className={styles.title}>
							Цена за сутки (BYN)
						</span>
						<div className={styles.priceInputs}>
							<input type='number' placeholder='От' />
							<span>-</span>
							<input type='number' placeholder='До' />
						</div>
					</label>
				</div>
				<div className={styles.inputContainer}>
					<label className={styles.moreFilter}>
						<button
							onClick={handleOpenStuff}
							className={styles.moreButton}>
							<span>Больше опций </span>
							<svg
								width='18'
								height='18'
								viewBox='0 0 18 18'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'>
								<path
									d='M6.91109 4.29814C6.91109 2.90551 5.937 1.73697 4.63453 1.4358V0.661897C4.63453 0.296309 4.33822 0 3.97264 0C3.60705 0 3.31074 0.296309 3.31074 0.661897V1.4358C2.00835 1.73689 1.03418 2.90551 1.03418 4.29814C1.03418 5.69077 2.00827 6.85931 3.31074 7.16048V17.3381C3.31074 17.7037 3.60705 18 3.97264 18C4.33822 18 4.63453 17.7037 4.63453 17.3381V7.16048C5.937 6.85931 6.91109 5.69077 6.91109 4.29814ZM2.35805 4.29814C2.35805 3.40781 3.08238 2.68348 3.97271 2.68348C4.86303 2.68348 5.58737 3.40781 5.58737 4.29814C5.58737 5.18846 4.86303 5.9128 3.97271 5.9128C3.08238 5.9128 2.35805 5.18846 2.35805 4.29814Z'
									fill='#664EF9'
								/>
								<path
									d='M9.66188 8.89222V0.661897C9.66188 0.296309 9.36557 0 8.99998 0C8.63439 0 8.33808 0.296309 8.33808 0.661897V8.89222C7.03569 9.19331 6.06152 10.3619 6.06152 11.7546C6.06152 13.1472 7.03562 14.3157 8.33808 14.6169V17.3381C8.33808 17.7037 8.63439 18 8.99998 18C9.36557 18 9.66188 17.7037 9.66188 17.3381V14.6169C10.9643 14.3158 11.9384 13.1472 11.9384 11.7546C11.9384 10.3619 10.9643 9.19338 9.66188 8.89222ZM7.38539 11.7546C7.38539 10.8642 8.10973 10.1399 9.00005 10.1399C9.89038 10.1399 10.6147 10.8642 10.6147 11.7546C10.6147 12.6449 9.89038 13.3692 9.00005 13.3692C8.10973 13.3692 7.38539 12.6449 7.38539 11.7546Z'
									fill='#664EF9'
								/>
								<path
									d='M16.9658 7.20151C16.9658 5.80888 15.9917 4.64034 14.6892 4.33918V0.661897C14.6892 0.296309 14.3929 0 14.0273 0C13.6617 0 13.3654 0.296309 13.3654 0.661897V4.33918C12.063 4.64027 11.0889 5.80888 11.0889 7.20151C11.0889 8.59415 12.063 9.76269 13.3654 10.0639V17.3381C13.3654 17.7037 13.6617 18 14.0273 18C14.3929 18 14.6892 17.7037 14.6892 17.3381V10.0639C15.9917 9.76269 16.9658 8.59415 16.9658 7.20151ZM12.4127 7.20151C12.4127 6.31119 13.1371 5.58685 14.0274 5.58685C14.9177 5.58685 15.6421 6.31119 15.6421 7.20151C15.6421 8.09184 14.9177 8.81618 14.0274 8.81618C13.1371 8.81618 12.4127 8.09184 12.4127 7.20151Z'
									fill='#664EF9'
								/>
							</svg>
						</button>
					</label>
				</div>
				<div className={styles.inputContainer}>
					<div className={styles.moreFilter}>
						<button type='reset' className={styles.clear}>
							Очистить
						</button>

						<button type='submit' className={styles.submit}>
							Показать объекты
							<svg
								width='19'
								height='19'
								viewBox='0 0 19 19'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'>
								<path
									d='M7.125 14.25L11.875 9.5L7.125 4.75'
									stroke='white'
									strokeWidth='2'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
							</svg>
						</button>
					</div>
				</div>
			</div>
			<div
				className={`${styles.moreContainer} ${
					stuffIsOpen ? styles.open : null
				}`}>
				<div className={styles.moreSelects}>
					<div className={styles.moreInputContainer}>
						<label className={styles.moreLabel}>
							<span className={styles.title}>Спальные места</span>
							<Select
								key='bedrooms'
								items={bedrooms}
								title='Выберите'
								style={{
									backgroundColor: '#F8F8F8',
									boxShadow: 'none'
								}}
								withIcon={false}
							/>
						</label>
					</div>
					<div className={styles.moreInputContainer}>
						<label className={styles.moreLabel}>
							<span className={styles.title}>Район</span>
							<Select
								key='subway'
								items={subways}
								title='Выберите'
								style={{
									backgroundColor: '#F8F8F8',
									boxShadow: 'none'
								}}
								withIcon={false}
							/>
						</label>
					</div>
					<div className={styles.moreInputContainer}>
						<label className={styles.moreLabel}>
							<span className={styles.title}>Метро</span>
							<Select
								key='district'
								items={districts}
								title='Выберите'
								style={{
									backgroundColor: '#F8F8F8',
									boxShadow: 'none'
								}}
								withIcon={false}
							/>
						</label>
					</div>
				</div>
				<div className={styles.moreStuffContainer}>
					{stuffList.map((item, idx) => {
						return (
							<div
								key={`${item}_${idx}`}
								className={styles.moreCheckbox}>
								<label className={styles.moreCheckboxLabel}>
									<input type='checkbox' />
									<svg
										className={styles.moreCheckedIcon}
										width='14'
										height='14'
										viewBox='0 0 14 14'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'>
										<g clipPath='url(#clip0_2831_3982)'>
											<path
												d='M0.5 7.41478L4.95177 11.8751L13.5 3.33527L12.2728 2.125L4.95177 9.43749L1.71024 6.19599L0.5 7.41478Z'
												fill='white'
											/>
										</g>
										<defs>
											<clipPath id='clip0_2831_3982'>
												<rect
													width='13'
													height='13'
													fill='white'
													transform='translate(0.5 0.5)'
												/>
											</clipPath>
										</defs>
									</svg>
									<span>{item}</span>
								</label>
							</div>
						)
					})}
				</div>
			</div>
		</form>
	)
}

export default Filter
