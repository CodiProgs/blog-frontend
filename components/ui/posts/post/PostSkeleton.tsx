import cn from 'clsx'
import { FC } from 'react'

import styles from './Post.module.scss'

const PostSkeleton: FC = () => {
	return (
		<div className={cn(styles.post, styles.skeleton)}>
			<div className={styles.author}>
				<div className={styles.avatar} />
				<div className={styles.info}>
					<div className={styles.name} />
					<div className={styles.meta}>
						<div className={styles.category} />
						<span className={styles.date} />
					</div>
				</div>
			</div>
			<div className={styles.content}>
				<div className={styles.title} />
				<div className={styles.text}>
					<span />
				</div>
			</div>
		</div>
	)
}

export { PostSkeleton }
