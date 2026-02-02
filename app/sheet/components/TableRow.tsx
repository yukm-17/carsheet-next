import { ReactNode } from 'react'

interface TableRowProps {
	headText: string
	children: ReactNode
}

const TableRow = ({ headText, children }: TableRowProps) => {
	return (
		<div className="flex border border-t-0">
			<div className="px-5 py-4 w-36">
				<h5 className="font-bold">{headText}</h5>
			</div>

			{children}
		</div>
	)
}

export default TableRow
