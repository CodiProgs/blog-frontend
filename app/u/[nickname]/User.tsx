'use client'

import { FC } from 'react'

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

	return <div>{loading ? 'Loading...' : data?.profile?.nickname}</div>
}

export { User }
