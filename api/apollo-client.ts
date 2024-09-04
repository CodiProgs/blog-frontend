import {
	ApolloClient,
	InMemoryCache,
	createHttpLink,
	from
} from '@apollo/client'

import { SERVER_URL } from '@/config/api.config'

const httpLink = createHttpLink({
	uri: `${SERVER_URL}/graphql`,
	credentials: 'include'
})

export const client = new ApolloClient({
	cache: new InMemoryCache({}),
	headers: {
		'Content-Type': 'application/json'
	},
	link: from([httpLink])
})
