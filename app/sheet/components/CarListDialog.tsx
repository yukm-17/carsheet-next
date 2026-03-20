'use client'

import { Database } from '@/app/types/supabase'
import { Input } from '@/components/ui/input'
import { createClient } from '@supabase/supabase-js'
import { useEffect, useState } from 'react'

const CarListDialog = () => {
	const supabase = createClient<Database>(
		process.env.NEXT_PUBLIC_SUPABASE_URL!,
		process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
	)

	const [data, setData] = useState<Database['public']['Views']['vehicle_with_image']['Row'][]>([])
	const [isLoading, setIsLoading] = useState<boolean>(true)
	const [keyword, setKeyword] = useState<string>('')

	const fetchData = async () => {
		setIsLoading(true)

		let query = supabase.from('vehicle_with_image').select('*')
		const trimmed = keyword.trim()

		if (trimmed.length > 0) {
			query = query.ilike('model', `%${trimmed}%`)
		}

		const { data, error } = await query

		if (error) {
			console.error(error)
			setIsLoading(false)
			return
		}

		setData(data ?? [])
		setIsLoading(false)
	}

	useEffect(() => {
		fetchData()
	}, [])

	return isLoading ? (
		<div className="min-h-56">Loading...</div>
	) : (
		<div className="flex flex-col gap-4">
			<div className="flex justify-between border border-zinc-300 rounded-md mr-4">
				<Input
					type="text"
					placeholder="차량 모델명을 검색하세요"
					className="border-none outline-none shadow-none bg-none transition-none focus-visible:ring-0"
					value={keyword}
					onChange={e => setKeyword(e.target.value)}
					onKeyDown={e => {
						if (e.key === 'Enter') fetchData()
					}}
				/>
			</div>

			{data.length > 0 ? (
				<div className="-mx-4 no-scrollbar max-h-[50vh] overflow-y-auto grid grid-cols-3 gap-4 px-4">
					{data.map(item => (
						<div
							key={item.id ?? `${item.brand ?? ''}-${item.model ?? ''}`}
							className="border border-zinc-300 rounded-lg overflow-hidden p-3 w-full h-56"
						>
							<div className="flex flex-col gap-4 w-full h-full">
								<div className="flex justify-center items-center h-32 rounded-md shadow-sm overflow-hidden">
									<img
										src={item.image_url ?? 'https://placehold.co/600x400'}
										alt={item.model ?? 'sample'}
									/>
								</div>

								<div>
									<p className="font-bold">{item.model}</p>
									<p>{item.brand}</p>
								</div>
							</div>
						</div>
					))}
				</div>
			) : (
				<div className="min-h-56">No data</div>
			)}
		</div>
	)
}

export default CarListDialog
