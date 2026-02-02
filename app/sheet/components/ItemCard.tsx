import { ItemCardProps } from '@/app/sheet/types/types'
import { Button } from '@/components/ui/button'
import { CircleX, PlusIcon } from 'lucide-react'

const ItemCard = ({ data }: ItemCardProps) => {
	return data ? (
		<div className="relative border-2 border-teal-500 rounded-lg overflow-hidden p-4">
			<Button className="absolute top-1.5 right-1.5">
				<CircleX />
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
		<div className="border-dashed border-2 rounded-lg overflow-hidden">
			<Button variant="ghost" asChild>
				<div className="flex flex-col gap-4 items-center justify-center w-full h-full cursor-pointer">
					<PlusIcon />

					<p>차량 선택</p>
				</div>
			</Button>
		</div>
	)
}

export default ItemCard
