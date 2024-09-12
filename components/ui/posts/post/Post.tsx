import Image from 'next/image'
import Link from 'next/link'
import { FC, useState } from 'react'

import { SERVER_URL } from '@/config/api.config'
import { PUBLIC_URL } from '@/config/url.config'

import { Modal } from '../../modal/Modal'
import { timeDisplay } from '../timeDisplay'

import styles from './Post.module.scss'
import { PostType } from '@/__generated__/output'

interface IPost {
	post: PostType
}

const Post: FC<IPost> = ({ post }) => {
	const [isExpanded, setIsExpanded] = useState(false)
	const [isModalOpen, setIsModalOpen] = useState(false)

	return (
		<div className={styles.post}>
			<div className={styles.author}>
				<Link
					href={PUBLIC_URL.USER(post.author.nickname)}
					className={styles.avatar}
				>
					<Image
						src={`${SERVER_URL}/${post.author.avatar}`}
						alt={post.author.nickname}
						fill
					/>
				</Link>
				<div className={styles.info}>
					<Link
						href={PUBLIC_URL.USER(post.author.nickname)}
						className={styles.name}
					>
						{post.author.name}
					</Link>
					<div className={styles.meta}>
						<Link
							href={PUBLIC_URL.CATEGORY(post.category.slug)}
							className={styles.category}
						>
							{post.category.name}
						</Link>
						<span className={styles.date}>{timeDisplay(post.createdAt)}</span>
					</div>
				</div>
			</div>
			<div className={styles.content}>
				<Link
					href={PUBLIC_URL.POST(post.category.slug, post.slug)}
					className={styles.title}
				>
					{post.title}
				</Link>
				<div className={styles.text}>
					<span>
						{post.content.length > 500
							? !isExpanded
								? post.content.slice(0, 500) + '...'
								: post.content
							: post.content}
					</span>
					{post.content.length > 500 && (
						<button
							onClick={() => setIsExpanded(!isExpanded)}
							className={styles.more}
						>
							{isExpanded ? 'Show less' : 'Show more'}
						</button>
					)}
				</div>

				{post.media && (
					<div className={styles.media}>
						{post.media.type === 'image' ? (
							<>
								<div
									className={styles.image}
									onClick={() => setIsModalOpen(true)}
								>
									<Image
										src={`${SERVER_URL}/${post.media.url}`}
										alt={post.title}
										fill
										objectFit='contain'
									/>
								</div>
								<Modal
									isOpen={isModalOpen}
									onClose={() => setIsModalOpen(false)}
								>
									<div className={styles.modal}>
										<Image
											src={`${SERVER_URL}/${post.media.url}`}
											alt={post.title}
											className={styles.modalImage}
											layout='responsive'
											width={1920}
											height={1080}
										/>
									</div>
								</Modal>
							</>
						) : (
							<video
								controls
								className={styles.video}
							>
								<source
									src={`${SERVER_URL}/${post.media.url}`}
									type='video/mp4'
								/>
							</video>
						)}
					</div>
				)}
			</div>
			{/* TODO: Add likes and comments */}
		</div>
	)
}

export { Post }
