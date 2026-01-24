import { ReactNode } from 'react'

interface ContentBoxProps {
	children: ReactNode
}

const ContentBox = ({ children }: ContentBoxProps) => {
	return <div className="bg-white rounded-md px-10 py-12 shadow-sm">{children}</div>
}

export default ContentBox
