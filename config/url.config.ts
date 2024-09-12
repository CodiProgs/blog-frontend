class PUBLIC {
	HOME = '/'
	AUTH = '/auth'
	USER = (nickname: string) => `/u/${nickname}`
	POST = (slugCategory: string, slugPost: string) =>
		`/${slugCategory}/${slugPost}`
	CATEGORY = (slug: string) => `/${slug}`
	NEW = '/new'
	POPULAR = '/popular'
	SEARCH = (query: string | null) => `/search ${query ? `?q=${query}` : ''}`
}

class DASHBOARD {
	CREATE = '/create'
	SETTINGS = '/settings'
	LIKES = '/likes'
}

export const PUBLIC_URL = new PUBLIC()
export const DASHBOARD_URL = new DASHBOARD()
