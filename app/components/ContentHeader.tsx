import { ReactNode } from 'react'

export interface ContentHeaderProps {
	title: string
	description?: string
	children?: ReactNode
}

const ContentHeader = ({ title, description, children }: ContentHeaderProps) => {
	return (
		<div className="flex flex-col gap-1">
			{children ? (
				<div className="flex justify-between items-center">
					<h3 className="text-2xl font-bold">{title}</h3>

					{children}
				</div>
			) : (
				<h3 className="text-2xl font-bold">{title}</h3>
			)}

			{description ? <p>{description}</p> : undefined}
		</div>
	)
}

export default ContentHeader
