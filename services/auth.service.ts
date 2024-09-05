import { NavigateOptions } from 'next/dist/shared/lib/app-router-context.shared-runtime'
import toast from 'react-hot-toast'

import { PUBLIC_URL } from '@/config/url.config'

import { useGlobalStore } from '@/stores/global.store'

import { client } from '@/api/apollo-client'

import { tokenService } from './token.service'
import {
	GetNewTokensDocument,
	GetNewTokensMutation,
	LogoutDocument
} from '@/__generated__/output'

class AuthService {
	async getNewTokens() {
		const { data } = await client.mutate<GetNewTokensMutation>({
			mutation: GetNewTokensDocument
		})

		const token = data?.token
		tokenService.save(token as string)

		return token
	}

	async logout(
		push?: (href: string, options?: NavigateOptions | undefined) => void
	) {
		await client.mutate({
			mutation: LogoutDocument
		})

		tokenService.remove()
		useGlobalStore.getState().setNickname(undefined)

		toast.success('Logged out successfully')

		if (push) push(PUBLIC_URL.HOME)
	}
}

export const authService = new AuthService()
