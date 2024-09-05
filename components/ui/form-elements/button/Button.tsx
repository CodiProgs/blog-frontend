import cn from 'clsx'
import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react'

import styles from './Button.module.scss'

type TypeButton = ButtonHTMLAttributes<HTMLButtonElement>

const Button: FC<PropsWithChildren<TypeButton>> = ({
	children,
	className,
	...rest
}) => {
	return (
		<button
			className={cn(styles.button, className)}
			{...rest}
		>
			{children}
		</button>
	)
}

export { Button }
