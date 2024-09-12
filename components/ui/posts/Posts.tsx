import { FC } from 'react'

import styles from './Posts.module.scss'
import { Post } from './post/Post'
import { PostSkeleton } from './post/PostSkeleton'
import { PostType } from '@/__generated__/output'

interface IPosts {
	posts: PostType[]
	loading: boolean
}

const Posts: FC<IPosts> = ({ posts, loading }) => {
	return (
		<div className={styles.posts}>
			<h2 className={styles.title}>Posts</h2>

			{loading ? (
				Array.from({ length: 4 }).map((_, i) => <PostSkeleton key={i} />)
			) : !posts || posts.length === 0 ? (
				<h3>No posts yet</h3>
			) : (
				<>
					{posts.map(post => (
						<Post
							key={post.id}
							post={post}
						/>
					))}
				</>
			)}
		</div>
	)
}

export { Posts }
