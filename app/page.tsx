import ContentBox from '@/app/components/ContentBox'
import ContentHeader from '@/app/components/ContentHeader'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
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
import { Separator } from '@/components/ui/separator'
import { Slider } from '@/components/ui/slider'
import { ArrowUp, HeartIcon, MessageCircle, Search, StarIcon, ThumbsUpIcon } from 'lucide-react'
import Image from 'next/image'

export default function Home() {
	return (
		<>
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
											<Checkbox id="search-concept-2" className="peer sr-only" />
											<FieldLabel
												htmlFor="search-concept-2"
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
											<Checkbox id="search-concept-3" className="peer sr-only" />
											<FieldLabel
												htmlFor="search-concept-3"
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

					<div className="flex gap-4 justify-center">
						<Button variant="outline">초기화</Button>
						<Button>검색하기</Button>
					</div>
				</div>
			</ContentBox>

			<div className="flex flex-col gap-4">
				<ContentHeader title="자동차 인기 순위">
					<div className="flex gap-2">
						<Button variant="outline">월간</Button>
						<Button>주간</Button>
					</div>
				</ContentHeader>

				<ContentBox>
					<div className="flex items-center gap-4 h-52">
						<span>1</span>

						<div className="h-full min-w-40 bg-cyan-100">image</div>

						<div className="flex flex-col flex-1 gap-2 h-full">
							<div className="flex justify-between items-center">
								<h4 className="text-lg font-bold">현대 그랜저</h4>
								<p className="inline-flex">
									<ArrowUp /> 상승
								</p>
							</div>

							<div className="flex gap-4">
								<p className="inline-flex font-bold">
									<StarIcon /> 4.5<span>(2,875)</span>
								</p>
								<p className="inline-flex font-bold text-lg text-teal-700">4,280만원</p>
							</div>

							<ul className="flex gap-2 items-center">
								<li>
									<Badge>가솔린</Badge>
								</li>
								<li>
									<Badge>2.5L</Badge>
								</li>
								<li>
									<Badge>8인승</Badge>
								</li>
							</ul>

							<div className="flex gap-4 mt-auto">
								<Button className="flex-1">상세보기</Button>

								<Button variant="outline">비교하기</Button>
							</div>
						</div>
					</div>
				</ContentBox>
			</div>

			<div className="flex flex-col gap-4">
				<ContentHeader title="사용자 평점">
					<Button variant="outline">리뷰쓰기</Button>
				</ContentHeader>

				<div className="grid grid-cols-2 gap-4">
					<ContentBox>
						<div className="flex flex-col gap-4">
							<div className="flex gap-4">
								<Avatar size="lg">
									<AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
									<AvatarFallback>CN</AvatarFallback>
								</Avatar>

								<div className="flex flex-1 justify-between items-center">
									<div>
										<p className="font-bold">정우진</p>
										<p>기아 카니발</p>

										<ul className="flex gap-1">
											<li>
												<StarIcon />
											</li>
											<li>
												<StarIcon />
											</li>
											<li>
												<StarIcon />
											</li>
											<li>
												<StarIcon />
											</li>
											<li>
												<StarIcon />
											</li>
										</ul>
									</div>

									<p className="self-start">2024.01.13</p>
								</div>
							</div>

							<p>
								국가는 균형있는 국민경제의 성장 및 안정과 적정한 소득의 분배를 유지하고, 시장의
								지배와 경제력의 남용을 방지하며, 경제주체간의 조화를 통한 경제의 민주화를 위하여
								경제에 관한 규제와 조정을 할 수 있다.
							</p>

							<Separator />

							<ul className="flex gap-4 items-center">
								<li className="flex gap-2 items-center">
									<ThumbsUpIcon />
									<span>도움됨 156</span>
								</li>
								<li className="flex gap-2 items-center">
									<HeartIcon />
									<span>209</span>
								</li>
								<li className="flex gap-2 items-center">
									<MessageCircle />
									<span>댓글 8</span>
								</li>
							</ul>
						</div>
					</ContentBox>

					<ContentBox>
						<div className="flex flex-col gap-4">
							<div className="flex gap-4">
								<Avatar size="lg">
									<AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
									<AvatarFallback>CN</AvatarFallback>
								</Avatar>

								<div className="flex flex-1 justify-between items-center">
									<div>
										<p className="font-bold">정우진</p>
										<p>기아 카니발</p>

										<ul className="flex gap-1">
											<li>
												<StarIcon />
											</li>
											<li>
												<StarIcon />
											</li>
											<li>
												<StarIcon />
											</li>
											<li>
												<StarIcon />
											</li>
											<li>
												<StarIcon />
											</li>
										</ul>
									</div>

									<p className="self-start">2024.01.13</p>
								</div>
							</div>

							<p>
								국가는 균형있는 국민경제의 성장 및 안정과 적정한 소득의 분배를 유지하고, 시장의
								지배와 경제력의 남용을 방지하며, 경제주체간의 조화를 통한 경제의 민주화를 위하여
								경제에 관한 규제와 조정을 할 수 있다.
							</p>

							<Separator />

							<ul className="flex gap-4 items-center">
								<li className="flex gap-2 items-center">
									<ThumbsUpIcon />
									<span>도움됨 156</span>
								</li>
								<li className="flex gap-2 items-center">
									<HeartIcon />
									<span>209</span>
								</li>
								<li className="flex gap-2 items-center">
									<MessageCircle />
									<span>댓글 8</span>
								</li>
							</ul>
						</div>
					</ContentBox>
				</div>

				<Button variant="outline">더 많은 리뷰 보기</Button>
			</div>

			<div className="flex flex-col gap-4">
				<ContentHeader title="맞춤 광고" />

				<div className="grid grid-cols-2 gap-4">
					<div
						className="p-6 rounded-md shadow-sm overflow-hidden h-64"
						style={{
							backgroundImage: 'url(https://placehold.co/600x400)',
							backgroundPosition: 'center',
							backgroundSize: 'cover',
						}}
					>
						<div className="flex flex-col h-full">
							<Badge>한정 특가</Badge>

							<div className="flex flex-col gap-2 mt-auto">
								<h4 className="font-bold">이벤트 제목</h4>
								<p>내용 어떤 혜택</p>
								<Button>자세히 보기</Button>
							</div>
						</div>
					</div>

					<div className="rounded-md shadow-sm overflow-hidden h-64">
						<Image
							src="https://placehold.co/600x400"
							width={600}
							height={400}
							alt="sample"
							unoptimized
						/>
					</div>
				</div>

				<div className="rounded-md shadow-sm text-center">
					<h3>내게 맞는 차량 바로 지금 겟</h3>
					<p>AI 시스템으로 어쩌구 저쩌구 블라블라</p>
					<Button>AI 추천 받기</Button>
				</div>
			</div>
		</>
	)
}
