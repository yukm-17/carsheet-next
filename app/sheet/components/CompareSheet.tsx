'use client'

import ContentBox from '@/app/components/ContentBox'
import ContentHeader from '@/app/components/ContentHeader'
import GeneralTab from '@/app/sheet/components/GeneralTab'
import ItemCard from '@/app/sheet/components/ItemCard'
import { usePageContext } from '@/app/sheet/PageContext'
import { FixedItemCardArray } from '@/app/sheet/types/types'
import { selectGeneralData } from '@/app/sheet/utils/selectors'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { createClient } from '@supabase/supabase-js'
import { Car } from 'lucide-react'
import { useEffect } from 'react'

const CompareSheet = () => {
	const supabase = createClient(
		process.env.NEXT_PUBLIC_SUPABASE_URL!,
		process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
	)

	const fetchData = async () => {
		const { data, error } = await supabase.from('vehicle_with_image').select()

		console.log(data)
	}

	useEffect(() => {
		fetchData()
	}, [])

	const context = usePageContext()

	console.log('context.selectedData', context.selectedData)

	const selectedData: FixedItemCardArray = Array(4)
		.fill(undefined)
		.map((_, idx) =>
			idx === 0 || idx === 1
				? {
						id: `${idx}`,
						model: {
							id: `${idx}`,
							dataId: `${idx + 1}`,
							name: '2026 BMW 3시리즈 320i',
							image: {
								src: 'https://prod.cosy.bmw.cloud/bmwweb/cosySec?COSY-EU-100-73315jAvmZ7dgMyDWRUQunKeNWJeihsPIgpnXJCpLMXTCBb419kVObHi4T4qY9%25wc3cLKiftxdxbMw178z8YZtECUkdn17slGAzWECrXpFknWlZQ6KArkXRaYWFOAQ5nmPKIhagOybfKjnvIT91leO2B3iE2TIjedwsSxBDMztI%250eqhk7BnDMLoACeLvhJHFlMJOou%25KXhndHSfWQoD%25%25V1PaHvefNEbn%252V10s9Ofm6E4riI1ySscZwBEsurxRtesJVZ857MruZRUgChOU45GvloILUgp2XHB1Dv6jQ%25eTQ2YDafM3Vjmqn1hdmDyLOEoz8qTJIsHjiL3uBr%25DBJdSeZfqruzVMR1LpSkNh5xpzVA0og8PoNF4HvUbJ0Kc%252G9n4WxfjpICcP81D6psxbUEqYXO89GsLmzQUiprJyYDGw6ZuQTPptYRSaLP67m5VnJYYCygNO99mlTv0IfyyX324BDZTQdjcdFk3azDxz7jdnkq8keszOALUAxZkIFJGFH6ABKupKYjFeWS6WPEKMPVYPb0WhbNmbMvPo90y9hPbHi4TiZ49%25wc3wRliftxdt53w178zsjvtECUkYuz7sYpNxUGfh19mpzSUeqK5ave963jnWo1Q53NxtJix2SPuFABNov5lYgtUDQGUyXqyFExSVWNRWlu9jPoxiEAGZI63VQedpRgvrxl59kE29t8YgM1NS99TlpO2kvmRhoId4eVGkCrmoShtPo584GGwg6QuiVpRBnHJA0KEjayVeTYCj7F3dzmvh8RwzP2LOM0PuzHJZ0uDShtf5',
								name: 'BMW 320i',
							},
							brand: {
								name: 'BMW',
							},
							price: 5900,
							year: '2026',
						},
						engine: {
							id: `${idx}`,
							dataId: `${idx + 1}`,
							type: '직렬 4기통',
							cc: 1998,
							fuel: '가솔린',
							maxOutput: 190,
							maxTorque: 31.6,
						},
						quality: {
							id: `${idx}`,
							dataId: `${idx + 1}`,
							zeroToHundred: 7.5,
							maxSpeed: 235,
							fuelEfficiency: 12.2,
						},
						spec: {
							id: `${idx}`,
							dataId: `${idx + 1}`,
							overallLength: 4709,
							overallWidth: 1827,
							overallHeight: 1442,
							wheelbase: 2851,
							curbWeight: 1570,
						},
						carry: {
							id: `${idx}`,
							dataId: `${idx + 1}`,
							seatingCapacity: 5,
							cargoVolume: 480,
						},
						convenienceFeatures: {
							id: `${idx}`,
							dataId: `${idx + 1}`,
							list: [
								'LED 헤드라이트',
								'파노라마 선루프',
								'하만카돈 사운드',
								'어댑티브 크루즈 컨트롤',
								'주차 보조 시스템',
							],
						},
				  }
				: undefined,
		) as FixedItemCardArray

	const selected = selectedData.filter(data => data).length >= 2

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
					{selectedData.map((data, idx) => (
						<ItemCard key={idx} data={data} />
					))}
				</div>

				<div className="flex gap-2 mt-5 justify-end">
					<Button variant="outline">초기화</Button>
					<Button>비교 내역 저장</Button>
				</div>
			</ContentBox>

			<ContentBox>
				{selected ? (
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
