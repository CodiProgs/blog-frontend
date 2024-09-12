'use client'

import cn from 'clsx'
import { format } from 'date-fns'
import { Settings } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import { Posts } from '@/components/ui/posts/Posts'

import { SERVER_URL } from '@/config/api.config'
import { DASHBOARD_URL } from '@/config/url.config'

import { useGlobalStore } from '@/stores/global.store'

import styles from './User.module.scss'
import { useProfileQuery } from '@/__generated__/output'

interface IUser {
	nickname: string
}

const User: FC<IUser> = ({ nickname }) => {
	const { data, loading } = useProfileQuery({
		variables: {
			nickname
		}
	})

	const { nickname: currentNickname } = useGlobalStore()

	return (
		<div>
			<div className={styles.user}>
				{!loading && !data?.profile ? (
					<h1>User not found</h1>
				) : (
					<>
						<div className={styles.info}>
							<div className={cn(styles.avatar, loading && styles.skeleton)}>
								{!loading && (
									<Image
										src={`${SERVER_URL}/${data?.profile?.avatar}`}
										alt={data?.profile?.nickname!}
										fill
									/>
								)}
							</div>
							<div>
								{loading ? (
									<>
										<div className={cn(styles.skeleton, styles.name)} />
										<div className={cn(styles.skeleton, styles.bio)} />
									</>
								) : (
									<>
										<h1 className={styles.name}>{data?.profile?.name}</h1>
										<p className={styles.bio}>{data?.profile?.bio}asd</p>
									</>
								)}
							</div>
						</div>
						<div className={styles.createdAt}>
							<span>Joined on: </span>
							{loading ? (
								<span className={cn(styles.skeleton, styles.date)} />
							) : (
								<span>
									{format(new Date(data?.profile?.createdAt), 'dd.MM.yyyy')}
								</span>
							)}
						</div>
						<div className={styles.posts_count}>
							{loading ? (
								<>
									<span>Posts: </span>
									<span className={cn(styles.skeleton, styles.count)} />
								</>
							) : !data?.profile?.posts || data.profile.posts.length === 0 ? (
								<>
									<span>No posts yet</span>
								</>
							) : (
								<>
									<span>Posts: </span>
									<span>{data?.profile?.posts.length}</span>
								</>
							)}
						</div>
						{currentNickname === nickname && (
							<Link
								href={DASHBOARD_URL.SETTINGS}
								className={styles.edit}
							>
								<Settings />
							</Link>
						)}
					</>
				)}
			</div>
			<Posts
				posts={data?.profile?.posts ?? []}
				loading={loading}
			/>
		</div>
	)
}

export { User }
