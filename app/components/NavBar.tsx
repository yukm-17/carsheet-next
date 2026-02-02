import Link from 'next/link'

const NavBar = () => {
	return (
		<div className="flex items-center justify-center fixed p-5 top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-sm shadow-sm">
			<div className="w-full max-w-7xl">
				<div className="flex justify-between items-center">
					<Link href="/">Logo</Link>

					<ul className="flex gap-4">
						<li>
							<Link href="/">인기 순위</Link>
						</li>
						<li>
							<Link href="/">최신 리뷰</Link>
						</li>
						<li>
							<Link href="/sheet">차량 비교</Link>
						</li>
						<li>
							<Link href="/community">커뮤니티</Link>
						</li>
						<li>
							<Link href="/">추천 차량</Link>
						</li>
						<li>
							<Link href="/user/1">마이페이지</Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default NavBar
