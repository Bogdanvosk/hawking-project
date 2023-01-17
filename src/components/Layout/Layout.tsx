import React from 'react'
import { Header, Footer } from '../'

import styles from './Layout.module.scss'

const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className={styles.root}>
			<Header />
			<main>{children}</main>
			<Footer />
		</div>
	)
}

export default Layout
