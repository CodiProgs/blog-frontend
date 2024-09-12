'use client'

import { FC, PropsWithChildren } from 'react'

import styles from './DashboardLayout.module.scss'
import { Header } from './header/Header'
import { Sidebar } from './sidebar/Sidebar'

const DashboardLayout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<div>
			<Header />
			<div className={styles.container}>
				<Sidebar />
				<div className={styles.content}>{children}</div>
				<div>right</div>
			</div>
		</div>
	)
}

export { DashboardLayout }
