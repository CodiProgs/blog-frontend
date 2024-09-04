'use client'

import { useProfileQuery } from '@/__generated__/output'

//for testing

export default function Home() {
	const { data, loading } = useProfileQuery({
		variables: {
			nickname: 'test'
		}
	})

	return (
		<>
			<h1 className='text-4xl font-bold italic'>Home Page</h1>
			{loading ? (
				<p>Loading...</p>
			) : (
				<>
					<p>{data?.profile?.nickname}</p>
				</>
			)}
		</>
	)
}
