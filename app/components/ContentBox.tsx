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

			<div className="bg-white rounded-md px-10 py-8 shadow-sm">{children}</div>
		</div>
	) : (
		<div className="bg-white rounded-md px-10 py-8 shadow-sm">{children}</div>
	)
}

export default ContentBox
