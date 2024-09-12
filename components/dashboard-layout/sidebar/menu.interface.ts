import { icons } from 'lucide-react'

export interface IMenuItem {
	link: string
	name: string
	icon: keyof typeof icons
}
