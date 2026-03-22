'use client'

import ContentBox from '@/app/components/ContentBox'
import ContentHeader from '@/app/components/ContentHeader'
import GeneralTab from '@/app/sheet/components/GeneralTab'
import ItemCard from '@/app/sheet/components/ItemCard'
import { usePageContext } from '@/app/sheet/PageContext'
import { ItemCardData } from '@/app/sheet/types/types'
import { selectGeneralData } from '@/app/sheet/utils/selectors'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Car } from 'lucide-react'

const CompareSheet = () => {
	const { selectedData } = usePageContext()

	const filled = (items: ItemCardData[] | undefined): (ItemCardData | null)[] => {
		return items
			? [...items, ...Array(4 - items.length).fill(null)].slice(0, 4)
			: Array.from({ length: 4 })
	}
	const filedData = filled(selectedData)

	const segmentedTrigger = `
		relative
		z-10
		flex-1
		rounded-full
		px-4
		text-sm
		font-medium
		text-muted-foreground
		transition-all
		duration-200
		data-[state=active]:bg-background
		data-[state=active]:text-foreground
		data-[state=active]:shadow
	`

	return (
		<section className="flex flex-col gap-4">
			<ContentHeader
				title="차량 비교"
				description="최대 4개까지 차량을 선택하여 상세 제원을 비교해보세요."
			/>

			<ContentBox>
				<div className="grid grid-cols-4 gap-4">
					{filedData.map(data => (
						<ItemCard key={data?.id} data={data} />
					))}
				</div>

				<div className="flex gap-2 mt-5 justify-end">
					<Button variant="outline">초기화</Button>
					<Button>비교 내역 저장</Button>
				</div>
			</ContentBox>

			<ContentBox>
				{selectedData ? (
					<div>
						<Tabs defaultValue="general" className="w-full">
							<TabsList
								className="
										relative
										flex
										h-10
										rounded-full
										bg-muted
										p-1
										"
							>
								<TabsTrigger value="general" className={segmentedTrigger}>
									기본 정보
								</TabsTrigger>
								<TabsTrigger value="engine" className={segmentedTrigger}>
									엔진
								</TabsTrigger>
								<TabsTrigger value="quality" className={segmentedTrigger}>
									성능
								</TabsTrigger>
								<TabsTrigger value="spec" className={segmentedTrigger}>
									제원
								</TabsTrigger>
								<TabsTrigger value="carrying" className={segmentedTrigger}>
									적재
								</TabsTrigger>
								<TabsTrigger value="convenience" className={segmentedTrigger}>
									편의사양
								</TabsTrigger>
							</TabsList>

							<TabsContent value="general">
								<GeneralTab data={selectGeneralData(selectedData)} />
							</TabsContent>
							<TabsContent value="engine">engine</TabsContent>
							<TabsContent value="quality">quality</TabsContent>
							<TabsContent value="spec">spec</TabsContent>
							<TabsContent value="carrying">carrying</TabsContent>
							<TabsContent value="convenience">convenience</TabsContent>
						</Tabs>
					</div>
				) : (
					<div className="flex flex-col gap-4 justify-center items-center">
						<Car />

						<h4 className="text-xl font-bold">차량을 선택해주세요</h4>
						<p>최소 2대 이상의 차량을 선택하면 상세 비교가 가능합니다</p>
					</div>
				)}
			</ContentBox>
		</section>
	)
}

export default CompareSheet
