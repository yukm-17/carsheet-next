import CustomTableCell from '@/app/sheet/components/CustomTableCell'
import CustomTableRow from '@/app/sheet/components/CustomTableRow'
import { ModelTypes } from '@/app/sheet/types/types'

interface GeneralTabProps {
	data: ModelTypes[]
}

const GeneralTab = ({ data }: GeneralTabProps) => {
	return (
		<ul>
			<li>
				<CustomTableRow headText="브랜드">
					{data.map(item => (
						<CustomTableCell key={item.dataId}>
							<span>{item.brand.name}</span>
						</CustomTableCell>
					))}
				</CustomTableRow>
			</li>
			<li>
				<CustomTableRow headText="모델명">
					{data.map(item => (
						<CustomTableCell key={item.dataId}>
							<span>{item.name}</span>
						</CustomTableCell>
					))}
				</CustomTableRow>
			</li>
			<li>
				<CustomTableRow headText="연식">
					{data.map(item => (
						<CustomTableCell key={item.dataId}>
							<span>{item.year}</span>
						</CustomTableCell>
					))}
				</CustomTableRow>
			</li>
			<li>
				<CustomTableRow headText="가격">
					{data.map(item => (
						<CustomTableCell key={item.dataId}>
							<span>{item.price}</span>
						</CustomTableCell>
					))}
				</CustomTableRow>
			</li>
		</ul>
	)
}

export default GeneralTab
