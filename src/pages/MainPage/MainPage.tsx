import React, { useState } from 'react'
import { Container, Filter, Layout, Select } from '../../components'

import styles from './MainPage.module.scss'

const MainPage = () => {
	const [activeTab, setActiveTab] = useState(0)
	const tabs = [
		'Квартиры на сутки',
		'Коттеджи и усадьбы',
		'Бани и сауны',
		'Авто напрокат'
	]

	const handleTabClick = (idx: number) => {
		setActiveTab(idx)
	}
	return (
		<Layout>
			<Container>
				<div className={styles.filter}>
					<h1 className={styles.title}>
						Sdaem.by - у нас живут <span>ваши объявления</span>
					</h1>
					<div className={styles.tabs}>
						{tabs.map((item, idx) => {
							return (
								<div
									onClick={() => handleTabClick(idx)}
									className={`${styles.tab} ${
										idx === activeTab ? styles.active : null
									}`}>
									<span>{item}</span>
								</div>
							)
						})}
					</div>
					<div className={styles.filterContainer}>
						{/* <div className={styles.citySelect}>
							<Select
								style={{
									backgroundColor: '#F8F8F8',
									boxShadow: 'none'
								}}
								items={[
									'Минск',
									'Город 2',
									'Город 2',
									'Город 4',
									'Город 5'
								]}
							/>
						</div>
						<Filter
							containerStyle={{
								backgroundColor: '#fff',
								borderRadius: '0 10px 10px 0'
							}}
						/> */}
					</div>
				</div>
			</Container>
		</Layout>
	)
}

export default MainPage
