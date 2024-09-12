import { Metadata } from 'next'
import { headers } from 'next/headers'

import { SERVER_URL } from '@/config/api.config'

import { client } from '@/api/apollo-client'

import { User } from './User'
import {
	ProfileDocument,
	ProfileQuery,
	UsersDocument,
	UsersQuery
} from '@/__generated__/output'

export async function generateStaticParams() {
	const { data } = await client.query<UsersQuery>({
		query: UsersDocument
	})

	return data.users.map(({ nickname }) => ({ nickname }))
}

export async function generateMetadata({
	params
}: {
	params: { nickname: string }
}): Promise<Metadata> {
	const { nickname } = params

	const { data } = await client.query<ProfileQuery>({
		query: ProfileDocument,
		variables: {
			nickname
		}
	})

	const currentHeaders = headers()

	const host = currentHeaders.get('host')
	const protocol = currentHeaders.get('x-forwarded-proto') || 'https'

	const clientUrl = `${protocol}://${host}`

	return {
		title: data.profile?.name,
		description: `${data.profile?.name} ${data.profile?.bio || ''}`,
		openGraph: {
			images: [
				{
					url: `${SERVER_URL}/${data.profile?.avatar}`
				}
			],
			type: 'profile',
			url: `${clientUrl}/u/${nickname}`
		}
	}
}

export default function UserPage({ params }: { params: { nickname: string } }) {
	const { nickname } = params

	return <User nickname={nickname} />
}
