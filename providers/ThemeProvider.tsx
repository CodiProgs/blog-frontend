'use client'

import { FC, PropsWithChildren } from 'react'

import '@/assets/styles/theme.scss'

import { useCookie } from '@/hooks/useCookie'

import { ThemeContext, ThemeType } from '@/contexts/theme.context'

interface IThemeProvider {
	initialTheme: ThemeType
}

const ThemeProvider: FC<PropsWithChildren<IThemeProvider>> = ({
	initialTheme,
	children
}) => {
	const [theme, setTheme] = useCookie<ThemeType>({
		defaultValue: initialTheme,
		key: 'Theme'
	})

	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			<div className={theme}>{children}</div>
		</ThemeContext.Provider>
	)
}

export { ThemeProvider }
