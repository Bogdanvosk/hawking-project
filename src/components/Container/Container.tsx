import React from 'react'
import styles from './Container.module.scss'

const Container = ({
	children,
	width
}: {
	children: React.ReactNode
	width?: number
}) => {
	return (
		<div className={styles.container} style={{ width: width + "%" }}>
			{children}
		</div>
	)
}

export default Container
