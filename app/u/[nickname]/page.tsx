import { Metadata } from 'next'

import { client } from '@/api/apollo-client'

import { UsersDocument, UsersQuery } from '@/__generated__/output'

export const metadata: Metadata = {
	title: 'User'
}

export async function generateStaticParams() {
	const { data } = await client.query<UsersQuery>({
		query: UsersDocument
	})

	return data.users.map(({ nickname }) => ({ nickname }))
}

export default function UserPage({ params }: { params: { nickname: string } }) {
	const { nickname } = params

	// return <User nickname={nickname} />
	return <div>{nickname}</div>
}
