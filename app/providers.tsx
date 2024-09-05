import { cookies } from 'next/headers'
import { FC, PropsWithChildren } from 'react'
import { Toaster } from 'react-hot-toast'

import { ApolloClientProvider } from '@/providers/ApolloClientProvider'
import { ThemeProvider } from '@/providers/ThemeProvider'

import { EnumCookie } from '@/services/cookie.service'

import { ThemeType } from '@/contexts/theme.context'

const Providers: FC<PropsWithChildren> = ({ children }) => {
	const theme = (cookies().get(EnumCookie.Theme)?.value as ThemeType) || 'light'

	return (
		<ThemeProvider initialTheme={theme}>
			<ApolloClientProvider>
				<Toaster toastOptions={{ duration: 2500 }} />
				{children}
			</ApolloClientProvider>
		</ThemeProvider>
	)
}

export default Providers
