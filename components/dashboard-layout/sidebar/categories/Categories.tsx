'use client'

import cn from 'clsx'
import Link from 'next/link'
import { FC } from 'react'

import { PUBLIC_URL } from '@/config/url.config'

import styles from './Categories.module.scss'
import { useCategoriesQuery } from '@/__generated__/output'

const SideBarCategories: FC = () => {
	const { data, loading } = useCategoriesQuery()

	return (
		<>
			<li className={styles.title}>Categories</li>

			{loading
				? Array.from({ length: 5 }).map((_, index) => (
						<li
							key={index}
							className={cn(styles.item, styles.skeleton)}
						/>
					))
				: data?.categories.map(category => (
						<li
							key={category.id}
							className={styles.item}
						>
							<Link href={PUBLIC_URL.CATEGORY(category.slug)}>
								{category.name}
							</Link>
						</li>
					))}
		</>
	)
}

export { SideBarCategories }
