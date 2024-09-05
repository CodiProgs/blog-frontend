import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { PUBLIC_URL } from '@/config/url.config'

import styles from './NotFound.module.scss'
import PageNotFoundImage from '@/public/page-not-found.png'

export const metadata: Metadata = {
	title: 'Page not found'
}

export default function NotFoundPage() {
	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<div className={styles.left}>
					<div className={styles.status}>404</div>
					<h1 className={styles.heading}>Page not found</h1>
					<p>The page you are looking for does not exist.</p>
					<Link
						href={PUBLIC_URL.HOME}
						className={styles.link}
					>
						Go to home
					</Link>
				</div>
				<div className={styles.right}>
					<Image
						src={PageNotFoundImage}
						alt='Auth'
					/>
					<span>
						Illustration by{' '}
						<a href='https://icons8.com/illustrations/author/kP9rc8JiBCcz'>
							Irene M. Ray
						</a>{' '}
						from <a href='https://icons8.com/illustrations'>Ouch!</a>
					</span>
				</div>
			</div>
		</div>
	)
}
