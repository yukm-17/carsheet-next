import CompareSheet from '@/app/sheet/components/CompareSheet'
import { PageProvider } from '@/app/sheet/PageContext'

export default function Sheet() {
	return (
		<PageProvider>
			<CompareSheet />
		</PageProvider>
	)
}
