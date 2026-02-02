import { ReactNode } from 'react'

interface TableCellProps {
	children: ReactNode
}

const TableCell = ({ children }: TableCellProps) => {
	return (
		<div className="border border-r-0 border-t-0 px-2 py-4 flex flex-1 justify-center items-center text-center">
			{children}
		</div>
	)
}

export default TableCell
