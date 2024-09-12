import cn from 'clsx'
import { Palette } from 'lucide-react'
import { FC } from 'react'

import styles from './ThemeToggleButton.module.scss'
import { useTheme } from '@/contexts/theme.context'

const ThemeToggleButton: FC = () => {
	const { theme, setTheme } = useTheme()

	return (
		<li className={styles.item}>
			<div className={styles.content}>
				<Palette className={styles.icon} />
				<span>Dark theme</span>
				<div className={styles.toggleWrapper}>
					<button
						onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
						className={cn(
							styles.toggle,
							theme === 'light' ? styles.toggleLight : styles.toggleDark
						)}
					/>
				</div>
			</div>
		</li>
	)
}

export { ThemeToggleButton }
