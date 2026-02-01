import ContentHeader, { ContentHeaderProps } from '@/app/components/ContentHeader'
import { ReactNode } from 'react'

interface ContentBoxProps {
	header?: ContentHeaderProps
	children: ReactNode
}

const ContentBox = ({ header, children }: ContentBoxProps) => {
	return header ? (
		<div className="flex flex-col gap-4">
			<ContentHeader title={header.title} description={header.description}>
				{children}
			</ContentHeader>

			<div className="bg-white rounded-lg px-10 py-8 shadow-md">{children}</div>
		</div>
	) : (
		<div className="bg-white rounded-lg px-10 py-8 shadow-md">{children}</div>
	)
}

export default ContentBox
