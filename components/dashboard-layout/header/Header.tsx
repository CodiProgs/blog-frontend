import { NotebookPen } from 'lucide-react'
import Link from 'next/link'
import { FC } from 'react'

import { SITE_NAME } from '@/constants/seo.constant'

import { PUBLIC_URL } from '@/config/url.config'

import styles from './Header.module.scss'
import { HeaderProfile } from './Profile/Profile'

const Header: FC = () => {
	return (
		<header className={styles.header}>
			<div className={styles.content}>
				<div className={styles.logo}>
					<Link href={PUBLIC_URL.POPULAR}>
						<NotebookPen />
						{SITE_NAME}
					</Link>
				</div>
				{/* //TODO: Add search bar */}
				<HeaderProfile />
			</div>
		</header>
	)
}

export { Header }
