'use client'

import { FixedItemCardArray } from '@/app/sheet/types/types'
import {
	createContext,
	Dispatch,
	PropsWithChildren,
	SetStateAction,
	useContext,
	useState,
} from 'react'

type PageContextValue = {
	selectedData: FixedItemCardArray | undefined
	setSelectedData: Dispatch<SetStateAction<FixedItemCardArray | undefined>>
}

const PageContext = createContext<PageContextValue | undefined>(undefined)

export const usePageContext = () => {
	const context = useContext(PageContext)

	if (!context) {
		throw new Error('usePageContext must be used within PageProvider')
	}

	return context
}

export const PageProvider = ({ children }: PropsWithChildren) => {
	// 사용자가 선택한 비교 대상
	const [selectedData, setSelectedData] = useState<FixedItemCardArray>()

	return (
		<PageContext.Provider value={{ selectedData, setSelectedData }}>
			{children}
		</PageContext.Provider>
	)
}
