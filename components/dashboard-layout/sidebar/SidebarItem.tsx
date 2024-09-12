import { icons } from 'lucide-react'
import Link from 'next/link'
import { FC } from 'react'

import styles from './Sidebar.module.scss'
import { IMenuItem } from './menu.interface'

const SidebarItem: FC<IMenuItem> = ({ icon, link, name }) => {
	const Icon = icons[icon]

	return (
		<li className={styles.item}>
			<Link href={link}>
				<Icon />
				<span>{name}</span>
			</Link>
		</li>
	)
}

export { SidebarItem }
