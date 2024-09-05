import cn from 'clsx'
import { InputHTMLAttributes, forwardRef } from 'react'

import styles from './Field.module.scss'

interface IField extends InputHTMLAttributes<HTMLInputElement> {
	error?: string
	label?: string
	isNumber?: boolean
	extra?: string
}

const Field = forwardRef<HTMLInputElement, IField>(
	({ placeholder, label, error, isNumber, extra, ...rest }, ref) => {
		return (
			<div className={cn(styles.field, extra)}>
				<label>
					{label && <span>{label}</span>}
					<input
						ref={ref}
						placeholder={placeholder}
						onKeyDown={event => {
							if (
								isNumber &&
								!/[0-9]/.test(event.key) &&
								event.key !== 'Backspace' &&
								event.key !== 'Tab' &&
								event.key !== 'Enter' &&
								event.key !== 'ArrowLeft' &&
								event.key !== 'ArrowRight'
							) {
								event.preventDefault()
							}
						}}
						{...rest}
					/>
				</label>
				{error && <p className={styles.error}>{error}</p>}
			</div>
		)
	}
)

Field.displayName = 'Field'

export { Field }
