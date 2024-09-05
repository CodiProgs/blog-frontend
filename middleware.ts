import { NextRequest, NextResponse } from 'next/server'

import { PUBLIC_URL } from './config/url.config'
import { EnumCookie } from './services/cookie.service'

export async function middleware(request: NextRequest) {
	const refreshToken = request.cookies.get(EnumCookie.RefreshToken)?.value

	const isAuthPage = request.url.includes(PUBLIC_URL.AUTH)

	if (isAuthPage) {
		if (refreshToken)
			return NextResponse.redirect(new URL(PUBLIC_URL.POPULAR, request.url))

		return NextResponse.next()
	}

	if (refreshToken === undefined) {
		return NextResponse.redirect(new URL(PUBLIC_URL.AUTH, request.url))
	}

	return NextResponse.next()
}

export const config = {
	matcher: ['/auth', '/create', '/settings']
}
