import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import Link from 'next/link'

const NavBar = () => {
	return (
		<div className='flex items-center justify-center bg-white'>
			<div className='w-full max-w-4xl'>
				<div className='flex justify-between items-center'>
					<div>Logo</div>

					<ul className='flex gap-4'>
						<li>
							<NavigationMenu>
								<NavigationMenuList>
									<NavigationMenuItem>
										<NavigationMenuTrigger>Item One</NavigationMenuTrigger>
										<NavigationMenuContent>
											<NavigationMenuLink>Link</NavigationMenuLink>
										</NavigationMenuContent>
									</NavigationMenuItem>
								</NavigationMenuList>
							</NavigationMenu>
						</li>
						<li>
							<Link href='/'>인기 순위</Link>
						</li>
						<li>
							<Link href='/'>최신 리뷰</Link>
						</li>
						<li>
							<Link href='/'>차량 비교</Link>
						</li>
						<li>
							<Link href='/'>커뮤니티</Link>
						</li>
						<li>
							<Link href='/'>추천 차량</Link>
						</li>
						<li>
							<Link href='/'>마이페이지</Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default NavBar
