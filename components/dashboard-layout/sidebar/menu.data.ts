import { DASHBOARD_URL, PUBLIC_URL } from '@/config/url.config'

import type { IMenuItem } from './menu.interface'

export const MENU: IMenuItem[] = [
	{
		link: PUBLIC_URL.POPULAR,
		name: 'Popular',
		icon: 'Flame'
	},
	{
		link: PUBLIC_URL.NEW,
		name: 'New',
		icon: 'Clock'
	},
	{
		link: DASHBOARD_URL.LIKES,
		name: 'Likes',
		icon: 'Heart'
	},
	{
		link: PUBLIC_URL.SEARCH(null),
		name: 'Search',
		icon: 'Search'
	}
]
