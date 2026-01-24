import ContentBox from '@/app/components/ContentBox'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Field, FieldGroup, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'
import { Slider } from '@/components/ui/slider'
import { Search } from 'lucide-react'

export default function Home() {
	return (
		<ContentBox>
			<div className="flex flex-col gap-6">
				<p className="text-2xl font-bold">차량 검색</p>

				<div className="flex justify-between border rounded-md">
					<Input
						type="text"
						placeholder="차량 모델명, 브랜드를 검색하세요"
						className="border-none outline-none shadow-none bg-none transition-none focus-visible:ring-0 text-sm"
					/>

					<Button variant="outline" size="icon">
						<Search />
					</Button>
				</div>

				<ul className="flex gap-2 items-center">
					<li>
						<Badge asChild>
							<Button className="font-bold">추천 검색어</Button>
						</Badge>
					</li>
					<li>
						<Badge asChild>
							<Button className="">추천 검색어</Button>
						</Badge>
					</li>
					<li>
						<Badge asChild>
							<Button className="">추천 검색어</Button>
						</Badge>
					</li>
				</ul>

				<FieldGroup className="grid grid-cols-3 gap-6 items-center">
					<Field className="flex flex-col gap-2">
						<FieldLabel htmlFor="search-type-brand">브랜드</FieldLabel>

						<Select defaultValue="all">
							<SelectTrigger id="search-type-brand" className="w-full">
								<SelectValue placeholder="브랜드를 선택하세요" />
							</SelectTrigger>

							<SelectContent>
								<SelectGroup>
									<SelectItem value="all">전체</SelectItem>
									<SelectItem value="01">01</SelectItem>
									<SelectItem value="02">02</SelectItem>
									<SelectItem value="03">03</SelectItem>
									<SelectItem value="04">04</SelectItem>
									<SelectItem value="05">05</SelectItem>
									<SelectItem value="06">06</SelectItem>
									<SelectItem value="07">07</SelectItem>
									<SelectItem value="08">08</SelectItem>
									<SelectItem value="09">09</SelectItem>
									<SelectItem value="10">10</SelectItem>
									<SelectItem value="11">11</SelectItem>
									<SelectItem value="12">12</SelectItem>
								</SelectGroup>
							</SelectContent>
						</Select>
					</Field>
					<Field className="flex flex-col gap-2">
						<FieldLabel htmlFor="search-type-price">가격</FieldLabel>

						<Slider id="search-type-price" defaultValue={[75]} max={100} step={1} />
					</Field>
					<Field className="flex flex-col gap-2">
						<FieldLabel htmlFor="search-type-fuel">연료 타입</FieldLabel>

						<Select defaultValue="all">
							<SelectTrigger id="search-type-fuel" className="w-full">
								<SelectValue placeholder="연료 타입을 선택하세요" />
							</SelectTrigger>

							<SelectContent>
								<SelectGroup>
									<SelectItem value="all">전체</SelectItem>
									<SelectItem value="01">01</SelectItem>
									<SelectItem value="02">02</SelectItem>
									<SelectItem value="03">03</SelectItem>
									<SelectItem value="04">04</SelectItem>
									<SelectItem value="05">05</SelectItem>
									<SelectItem value="06">06</SelectItem>
									<SelectItem value="07">07</SelectItem>
									<SelectItem value="08">08</SelectItem>
									<SelectItem value="09">09</SelectItem>
									<SelectItem value="10">10</SelectItem>
									<SelectItem value="11">11</SelectItem>
									<SelectItem value="12">12</SelectItem>
								</SelectGroup>
							</SelectContent>
						</Select>
					</Field>
				</FieldGroup>

				<div className="flex flex-col gap-2">
					<Label>주제</Label>

					<FieldGroup>
						<ul className="flex gap-2 items-center">
							<li>
								<Badge asChild>
									<Field>
										<Checkbox id="search-concept-1" className="peer sr-only" />
										<FieldLabel
											htmlFor="search-concept-1"
											className="cursor-pointer
											select-none
											transition-colors
											peer-data-[state=checked]:text-red-600
											peer-data-[state=checked]:font-bold"
										>
											test
										</FieldLabel>
									</Field>
								</Badge>
							</li>
							<li>
								<Badge asChild>
									<Field>
										<Checkbox id="search-concept-1" className="peer sr-only" />
										<FieldLabel
											htmlFor="search-concept-1"
											className="cursor-pointer
											select-none
											transition-colors
											peer-data-[state=checked]:text-red-600
											peer-data-[state=checked]:font-bold"
										>
											test
										</FieldLabel>
									</Field>
								</Badge>
							</li>
							<li>
								<Badge asChild>
									<Field>
										<Checkbox id="search-concept-1" className="peer sr-only" />
										<FieldLabel
											htmlFor="search-concept-1"
											className="cursor-pointer
											select-none
											transition-colors
											peer-data-[state=checked]:text-red-600
											peer-data-[state=checked]:font-bold"
										>
											test
										</FieldLabel>
									</Field>
								</Badge>
							</li>
						</ul>
					</FieldGroup>
				</div>

				<Button>검색하기</Button>
			</div>
		</ContentBox>
	)
}
