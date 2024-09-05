import { cookieService } from './cookie.service'

class TokenService {
	get() {
		const accessToken = cookieService.get('AccessToken')
		return accessToken || null
	}

	save(accessToken: string) {
		const expires = new Date()
		expires.setTime(expires.getTime() + 1 * 60 * 60 * 1000)

		cookieService.set('AccessToken', accessToken, {
			expires,
			secure: true
		})
	}

	remove() {
		cookieService.remove('AccessToken')
	}
}

export const tokenService = new TokenService()
