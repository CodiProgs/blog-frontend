import cn from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import { FC, PropsWithChildren, useEffect } from 'react'

import styles from './Modal.module.scss'

interface IModal {
	isOpen: boolean
	label?: string
	className?: string
	onClose: () => void
}

const Modal: FC<PropsWithChildren<IModal>> = ({
	isOpen,
	label,
	className,
	children,
	onClose
}) => {
	useEffect(() => {
		if (isOpen) {
			const scrollbarWidth =
				window.innerWidth - document.documentElement.clientWidth
			const originalPaddingRight = document.body.style.paddingRight

			document.body.classList.add('no-scroll')
			document.body.style.paddingRight = `${scrollbarWidth}px`

			return () => {
				setTimeout(() => {
					document.body.classList.remove('no-scroll')
					document.body.style.paddingRight = originalPaddingRight
				}, 300)
			}
		}
	}, [isOpen])

	return (
		<AnimatePresence>
			{isOpen && (
				<motion.div
					className={cn(styles.modal, className)}
					id='modal'
					onClick={onClose}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.3 }}
				>
					<motion.div
						initial={{ opacity: 0, scale: 0.9 }}
						animate={{ opacity: 1, scale: 1 }}
						exit={{ opacity: 0, scale: 0.9 }}
						transition={{ duration: 0.3 }}
						onClick={e => e.stopPropagation()}
					>
						{label && <h2 className={styles.label}>{label}</h2>}
						{children && <>{children}</>}
					</motion.div>
					<motion.button
						className={styles.close}
						onClick={onClose}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.3 }}
					>
						<X size={32} />
					</motion.button>
				</motion.div>
			)}
		</AnimatePresence>
	)
}

export { Modal }
