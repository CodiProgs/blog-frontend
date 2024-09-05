import { GraphQLErrorExtensions } from 'graphql'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { UseFormReset } from 'react-hook-form'
import toast from 'react-hot-toast'

import { tokenService } from '@/services/token.service'

import { PUBLIC_URL } from '@/config/url.config'

import { useGlobalStore } from '@/stores/global.store'

import {
	LoginDto,
	RegisterDto,
	useLoginMutation,
	useRegisterMutation
} from '@/__generated__/output'

export function useAuth(
	reset: UseFormReset<LoginDto & RegisterDto>,
	isLogin: boolean
) {
	const [errors, setErrors] = useState<GraphQLErrorExtensions>({})

	const { push } = useRouter()

	const mutation = isLogin ? useLoginMutation : useRegisterMutation

	const [mutate, { loading }] = mutation({
		onCompleted({ auth }) {
			reset()

			tokenService.save(auth.accessToken)
			toast.success('Success')

			useGlobalStore.getState().setNickname(auth.user.nickname)

			push(PUBLIC_URL.USER(auth.user.nickname))
		},
		onError({ graphQLErrors }) {
			const extensions = graphQLErrors?.[0]?.extensions
			extensions && setErrors(extensions)
		}
	})

	return { mutate, loading, errors, setErrors }
}
