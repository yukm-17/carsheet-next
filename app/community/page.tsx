import ContentBox from '@/app/components/ContentBox'
import ContentHeader from '@/app/components/ContentHeader'
import {
	Pagination,
	PaginationContent,
	PaginationEllipsis,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from '@/components/ui/pagination'
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table'
import Link from 'next/link'

export default function Community() {
	return (
		<div className="flex flex-col gap-4">
			<ContentHeader title="커뮤니티" />

			<ContentBox>
				<div className="flex gap-4">
					<section className="w-40">
						<ul>
							<li>
								<Link href="/">내 차 자랑</Link>
							</li>
							<li>
								<Link href="/">유머게시판</Link>
							</li>
							<li>
								<Link href="/">자유게시판</Link>
							</li>
						</ul>
					</section>

					<section className="flex-1">
						<Table>
							<TableHeader>
								<TableRow>
									<TableHead>번호</TableHead>
									<TableHead>말머리</TableHead>
									<TableHead>제목</TableHead>
									<TableHead>작성자</TableHead>
									<TableHead>작성일</TableHead>
									<TableHead>조회수</TableHead>
									<TableHead>좋아요</TableHead>
								</TableRow>
							</TableHeader>
							<TableBody>
								<TableRow>
									<TableCell>INV001</TableCell>
									<TableCell>Paid</TableCell>
									<TableCell>Credit Card</TableCell>
									<TableCell>$250.00</TableCell>
									<TableCell>$250.00</TableCell>
									<TableCell>$250.00</TableCell>
									<TableCell>$250.00</TableCell>
								</TableRow>
							</TableBody>
						</Table>

						<Pagination>
							<PaginationContent>
								<PaginationItem>
									<PaginationPrevious href="#" />
								</PaginationItem>
								<PaginationItem>
									<PaginationLink href="#">1</PaginationLink>
								</PaginationItem>
								<PaginationItem>
									<PaginationLink href="#" isActive>
										2
									</PaginationLink>
								</PaginationItem>
								<PaginationItem>
									<PaginationLink href="#">3</PaginationLink>
								</PaginationItem>
								<PaginationItem>
									<PaginationEllipsis />
								</PaginationItem>
								<PaginationItem>
									<PaginationNext href="#" />
								</PaginationItem>
							</PaginationContent>
						</Pagination>
					</section>
				</div>
			</ContentBox>
		</div>
	)
}
