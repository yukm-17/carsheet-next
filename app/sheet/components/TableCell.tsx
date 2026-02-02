import { ReactNode } from 'react'

interface TableCellProps {
	children: ReactNode
}

const TableCell = ({ children }: TableCellProps) => {
	return (
		<div className="outline-1 outline-gray-200 -outline-offset-1 px-2 py-4 flex flex-1 justify-center items-center text-center">
			{children}
		</div>
	)
}

export default TableCell
