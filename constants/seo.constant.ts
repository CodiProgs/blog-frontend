import { Metadata } from 'next'

export const NO_INDEX_PAGE: Metadata = {
	robots: { index: false, follow: false }
}

export const SITE_NAME = 'Blog'
export const SITE_DESCRIPTION =
	'A blog about software development and other interesting topics.'
