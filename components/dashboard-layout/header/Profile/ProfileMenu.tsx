import { LogOut, Settings, User } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Dispatch, FC, SetStateAction } from 'react'

import { authService } from '@/services/auth.service'

import { DASHBOARD_URL, PUBLIC_URL } from '@/config/url.config'

import styles from './Profile.module.scss'
import { UserType } from '@/__generated__/output'

interface IProfileMenu {
	setIsShow: Dispatch<SetStateAction<boolean>>
	profile: Partial<UserType>
}

const ProfileMenu: FC<IProfileMenu> = ({ setIsShow, profile }) => {
	const { push } = useRouter()

	return (
		<div className={styles.menu}>
			<nav>
				<ul onClick={() => setIsShow(false)}>
					<li>
						<Link
							href={PUBLIC_URL.USER(profile.nickname!)}
							className={styles.item}
						>
							<User />
							{profile.name}
						</Link>
					</li>
					<li>
						<Link
							href={DASHBOARD_URL.SETTINGS}
							className={styles.item}
						>
							<Settings />
							Settings
						</Link>
					</li>
					<li>
						<button
							className={styles.item}
							onClick={() => authService.logout(push)}
						>
							<LogOut />
							Logout
						</button>
					</li>
				</ul>
			</nav>
		</div>
	)
}

export { ProfileMenu }
