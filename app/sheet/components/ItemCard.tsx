import CarListDialog from '@/app/sheet/components/CarListDialog'
import { usePageContext } from '@/app/sheet/PageContext'
import { ItemCardProps } from '@/app/sheet/types/types'
import { Button } from '@/components/ui/button'
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog'
import { PlusIcon, X } from 'lucide-react'

const ItemCard = ({ data }: ItemCardProps) => {
	const { setSelectedData } = usePageContext()

	const handleDeleteItem = () => {
		setSelectedData(prev => prev?.filter(item => item.id !== data?.id))
	}

	return data ? (
		<div className="relative border-2 border-teal-500 rounded-lg overflow-hidden p-4">
			<Button
				variant="outline"
				size="icon-lg"
				className="absolute top-1.5 right-1.5 rounded-full"
				onClick={handleDeleteItem}
			>
				<X />
			</Button>

			<div className="flex flex-col gap-4 w-full h-full">
				<div className="flex justify-center items-center h-32 rounded-md shadow-sm overflow-hidden">
					<img
						src={data.model.image.src ?? 'https://placehold.co/600x400'}
						alt={data.model.image.name ?? 'sample'}
					/>
				</div>

				<div>
					<p className="font-bold">{data.model.name}</p>
					<p>{data.model.brand.name}</p>
					<p>{data.model.price}</p>
				</div>
			</div>
		</div>
	) : (
		<Dialog>
			<DialogTrigger>
				<div className="w-full h-full border-dashed border-2 rounded-lg overflow-hidden">
					<Button variant="ghost" asChild>
						<div className="flex flex-col gap-4 items-center justify-center w-full h-full cursor-pointer">
							<PlusIcon />

							<p>차량 선택</p>
						</div>
					</Button>
				</div>
			</DialogTrigger>

			<DialogContent className="sm:max-w-4xl">
				<DialogHeader>
					<DialogTitle>Title</DialogTitle>
				</DialogHeader>

				<CarListDialog />
			</DialogContent>
		</Dialog>
	)
}

export default ItemCard
