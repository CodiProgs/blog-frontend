import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

export interface GlobalState {
	nickname?: string
}
export interface GlobalActions {
	setNickname: (nickname?: string) => void
}

export const useGlobalStore = create<GlobalState & GlobalActions>()(
	devtools(
		persist(
			set => ({
				nickname: undefined,
				setNickname(nickname) {
					set({ nickname })
				}
			}),
			{ name: 'global-storage' }
		)
	)
)
