import TableCell from '@/app/sheet/components/TableCell'
import TableRow from '@/app/sheet/components/TableRow'
import { ModelTypes } from '@/app/sheet/types/types'

interface GeneralTabProps {
	data: ModelTypes[]
}

const GeneralTab = ({ data }: GeneralTabProps) => {
	return (
		<ul>
			<li>
				<TableRow headText="브랜드">
					{data.map(item => (
						<TableCell key={item.dataId}>
							<span>{item.brand.name}</span>
						</TableCell>
					))}
				</TableRow>
			</li>
			<li>
				<TableRow headText="모델명">
					{data.map(item => (
						<TableCell key={item.dataId}>
							<span>{item.name}</span>
						</TableCell>
					))}
				</TableRow>
			</li>
			<li>
				<TableRow headText="연식">
					{data.map(item => (
						<TableCell key={item.dataId}>
							<span>{item.year}</span>
						</TableCell>
					))}
				</TableRow>
			</li>
			<li>
				<TableRow headText="가격">
					{data.map(item => (
						<TableCell key={item.dataId}>
							<span>{item.price}</span>
						</TableCell>
					))}
				</TableRow>
			</li>
		</ul>
	)
}

export default GeneralTab
