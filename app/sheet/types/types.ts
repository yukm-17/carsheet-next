export interface ModelTypes {
	id: string
	dataId: string
	name: string | null
	brand: {
		name: string | null
	}
	image: {
		name: string | null
		src: string | null
	}
	price: number | null
	year: number | null
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
	engine?: EngineTypes | null
	quality?: QualityTypes | null
	spec?: SpecTypes | null
	carrying?: CarryTypes | null
	convenienceFeatures?: ConvenienceFeaturesTypes | null
}

export interface ItemCardProps {
	data?: ItemCardData | null
}
