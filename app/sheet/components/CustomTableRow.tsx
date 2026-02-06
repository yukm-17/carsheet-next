import { ReactNode } from 'react'

interface TableRowProps {
	headText: string
	children: ReactNode
	className?: string
}

const CustomTableRow = ({ headText, children, className }: TableRowProps) => {
	return (
		<div className="flex">
			<div className="outline-1 outline-gray-200 -outline-offset-1 px-5 py-4 w-36">
				<h5 className="font-bold">{headText}</h5>
			</div>

			{children}
		</div>
	)
}

export default CustomTableRow
