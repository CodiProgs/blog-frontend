'use client'

import { FC } from 'react'

import styles from './Sidebar.module.scss'
import { SidebarItem } from './SidebarItem'
import { SideBarCategories } from './categories/Categories'
import { MENU } from './menu.data'
import { ThemeToggleButton } from './themeToggleButton/ThemeToggleButton'

const Sidebar: FC = () => {
	return (
		<div className={styles.sidebar}>
			<ul className={styles.menu}>
				{MENU.map((item, index) => (
					<SidebarItem
						key={index}
						icon={item.icon}
						link={item.link}
						name={item.name}
					/>
				))}
				<li className={styles.hr} />
				<SideBarCategories />
				<li className={styles.hr} />
				<ThemeToggleButton />
			</ul>
		</div>
	)
}

export { Sidebar }
