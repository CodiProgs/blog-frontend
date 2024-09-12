'use client'

import cn from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { FC, useEffect, useState } from 'react'

import { Button } from '@/components/ui/form-elements/button/Button'

import { SERVER_URL } from '@/config/api.config'
import { PUBLIC_URL } from '@/config/url.config'

import { useGlobalStore } from '@/stores/global.store'

import { useOutside } from '@/hooks/useOutside'

import styles from './Profile.module.scss'
import { ProfileMenu } from './ProfileMenu'
import { useProfileLazyQuery } from '@/__generated__/output'

const HeaderProfile: FC = () => {
	const [getProfile, { data, loading }] = useProfileLazyQuery()

	const { ref, isShow, setIsShow } = useOutside(false)

	const { nickname } = useGlobalStore()

	const [isMounted, setIsMounted] = useState(false)

	useEffect(() => {
		if (nickname) {
			getProfile({
				variables: {
					nickname
				}
			})
		}
		setIsMounted(true)
	}, [nickname, getProfile])

	if (!isMounted || loading)
		return (
			<div className={cn(styles.profile, styles.skeleton)}>
				<div className={styles.avatar} />
			</div>
		)

	if (!data?.profile || !nickname)
		return (
			<Link href={PUBLIC_URL.AUTH}>
				<Button>Log in</Button>
			</Link>
		)

	return (
		<div
			className={styles.profile}
			ref={ref}
		>
			<button
				className={styles.avatar}
				onClick={() => setIsShow(!isShow)}
			>
				<Image
					src={`${SERVER_URL}/${data.profile.avatar}`}
					alt={data.profile.nickname}
					fill
				/>
			</button>
			{isShow && (
				<ProfileMenu
					setIsShow={setIsShow}
					profile={data.profile}
				/>
			)}
		</div>
	)
}

export { HeaderProfile }
