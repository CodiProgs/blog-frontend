import { format } from 'date-fns'

export function timeDisplay(createdAt: string) {
	const now = new Date()
	const postDate = new Date(createdAt)

	const secondsAgo = Math.floor((now.getTime() - postDate.getTime()) / 1000)

	if (secondsAgo < 60) {
		return `${secondsAgo} seconds ago`
	} else if (secondsAgo < 3600) {
		return `${Math.floor(secondsAgo / 60)} minutes ago`
	} else if (secondsAgo < 86400) {
		return `${Math.floor(secondsAgo / 3600)} hours ago`
	} else if (secondsAgo < 604800) {
		return `${Math.floor(secondsAgo / 86400)} days ago`
	} else {
		return format(postDate, 'dd.MM.yyyy')
	}
}
