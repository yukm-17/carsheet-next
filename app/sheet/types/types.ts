export interface ModelTypes {
	id: string
	dataId: string
	name: string
	brand: {
		name: string
	}
	image: {
		name: string
		src: string
	}
	price: number
	year: string
}

export interface EngineTypes {
	id: string
	dataId: string
	type: string
	cc: number
	fuel: string
	maxOutput: number
	maxTorque: number
}

export interface QualityTypes {
	id: string
	dataId: string
	zeroToHundred: number
	maxSpeed: number
	fuelEfficiency: number
}

export interface SpecTypes {
	id: string
	dataId: string
	overallLength: number
	overallWidth: number
	overallHeight: number
	wheelbase: number
	curbWeight: number
}

export interface CarryTypes {
	id: string
	dataId: string
	seatingCapacity: number
	cargoVolume: number
}

export interface ConvenienceFeaturesTypes {
	id: string
	dataId: string
	list: string[]
}

// FIXME 이름이나 타입 변경 필요
// 기본 정보, 엔진, 성능, 제원, 적재, 편의사양
export interface ItemCardData {
	id: string
	model: ModelTypes
	engine: EngineTypes
	quality: QualityTypes
	spec: SpecTypes
	carrying: CarryTypes
	convenienceFeatures: ConvenienceFeaturesTypes
}

export interface ItemCardProps {
	data?: ItemCardData
}

export type ItemCardSlot = ItemCardData | undefined

export type FixedItemCardArray = [ItemCardSlot, ItemCardSlot, ItemCardSlot, ItemCardSlot]
