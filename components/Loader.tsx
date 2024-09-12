import cn from 'clsx'
import { Loader2 } from 'lucide-react'
import { FC } from 'react'

interface ILoader {
	className?: string
}

const Loader: FC<ILoader> = ({ className }) => {
	return <Loader2 className={cn('size-8 text-icon animate-spin', className)} />
}

export { Loader }
