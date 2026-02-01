import Footer from '@/app/components/Footer'
import NavBar from '@/app/components/NavBar'
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
})

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
})

export const metadata: Metadata = {
	title: 'Car Sheet',
	description: '차량 모델 비교',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="ko">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				<NavBar />

				<div className="p-20 pt-32 flex min-h-screen items-center justify-center font-sans from-gray-50 via-teal-50 to-blue-50 bg-linear-to-br">
					<div className="w-full max-w-5xl min-h-screen">
						<div className="flex flex-col gap-16">{children}</div>
					</div>
				</div>

				<Footer />
			</body>
		</html>
	)
}
