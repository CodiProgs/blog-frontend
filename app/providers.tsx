import { FC, PropsWithChildren } from 'react'
import { Toaster } from 'react-hot-toast'

import { ApolloClientProvider } from '@/providers/ApolloClientProvider'

const Providers: FC<PropsWithChildren> = ({ children }) => {
	return (
		<ApolloClientProvider>
			<Toaster toastOptions={{ duration: 2500 }} />
			{children}
		</ApolloClientProvider>
	)
}

export default Providers
