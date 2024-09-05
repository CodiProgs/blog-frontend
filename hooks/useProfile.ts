import { useGlobalStore } from '@/stores/global.store'

import { useProfileQuery } from '@/__generated__/output'

export const useProfile = () => {
	const { nickname } = useGlobalStore()

	if (!nickname) {
		return { user: null, loading: false }
	}

	const { data, loading } = useProfileQuery({
		variables: {
			nickname
		}
	})

	return { user: data?.profile, loading }
}
