class PUBLIC {
	HOME = '/'
	AUTH = '/auth'
}

class DASHBOARD {
	private root = '/i'

	HOME = this.root
}

export const PUBLIC_URL = new PUBLIC()
export const DASHBOARD_URL = new DASHBOARD()
