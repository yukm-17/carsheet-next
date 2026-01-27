import Link from 'next/link'

const Footer = () => {
	return (
		<div className="bg-gray-800 text-white mt-5">
			<div className="w-full max-w-5xl p-5 mx-auto">
				<ul className="grid grid-cols-4">
					<li>
						<p>Logo</p>
						<p>최고의 자동차 비교 플랫폼으로 당신의 완ㅂ멱한 차량을 찾아드립니다</p>
					</li>
					<li>
						<p>빠른 링크</p>

						<ul>
							<li>
								<Link href="/">인기 순위</Link>
							</li>
							<li>
								<Link href="/">사용자 리뷰</Link>
							</li>
							<li>
								<Link href="/">차량 비교</Link>
							</li>
							<li>
								<Link href="/">추천 차량</Link>
							</li>
						</ul>
					</li>
					<li>
						<p>고객 지원</p>

						<ul>
							<li>
								<Link href="/">자주 묻는 질문</Link>
							</li>
							<li>
								<Link href="/">이용 가이드</Link>
							</li>
							<li>
								<Link href="/">문의하기</Link>
							</li>
							<li>
								<Link href="/">파트너십</Link>
							</li>
						</ul>
					</li>
					<li>
						<p>연락처</p>

						<ul>
							<li>
								<Link href="/">info@email.com</Link>
							</li>
							<li>
								<Link href="/">1588-0000</Link>
							</li>
							<li>
								<Link href="/">서울시 강남구</Link>
							</li>
						</ul>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default Footer
