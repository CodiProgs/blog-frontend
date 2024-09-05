import Cookies from 'js-cookie'

export enum EnumCookie {
	AccessToken = 'accessToken',
	RefreshToken = 'refreshToken',
	Theme = 'theme'
}

class CookieService {
	get(key: keyof typeof EnumCookie): string | undefined {
		return Cookies.get(EnumCookie[key])
	}

	set(
		key: keyof typeof EnumCookie,
		value: string,
		options?: Cookies.CookieAttributes | undefined
	): void {
		Cookies.set(EnumCookie[key], value as string, {
			expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 365),
			sameSite: 'lax',
			path: '/',
			...options
		})
	}

	remove(key: keyof typeof EnumCookie): void {
		Cookies.remove(EnumCookie[key])
	}
}

export const cookieService = new CookieService()
