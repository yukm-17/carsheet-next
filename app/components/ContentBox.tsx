import ContentHeader, { ContentHeaderProps } from '@/app/components/ContentHeader'
import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

interface ContentBoxProps {
	header?: ContentHeaderProps
	children: ReactNode
	className?: string
}

const ContentBox = ({ header, children, className }: ContentBoxProps) => {
	return header ? (
		<div className={cn('flex flex-col gap-4', className)}>
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
