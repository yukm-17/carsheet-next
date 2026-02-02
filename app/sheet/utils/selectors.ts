import { FixedItemCardArray } from '@/app/sheet/types/types'

/**
 * 기본 정보 필터링
 * @param items 선택한 차량 목록(최대 4대)
 * @returns
 */
export const selectGeneralData = (items: FixedItemCardArray) =>
	items
		.filter(item => !!item)
		.map(item => ({
			id: item.id,
			dataId: item.model.dataId,
			name: item.model.name,
			brand: {
				name: item.model.brand.name,
			},
			image: {
				name: item.model.image.name,
				src: item.model.image.src,
			},
			price: item.model.price,
			year: item.model.year,
		}))

/**
 * 엔진 정보 필터링
 * @param items 선택한 차량 목록(최대 4대)
 * @returns
 */
export const selectEngineData = (items: FixedItemCardArray) =>
	items
		.filter(item => !!item)
		.map(item => ({
			id: item.id,
			dataId: item.engine.dataId,
			type: item.engine.type,
			cc: item.engine.cc,
			fuel: item.engine.fuel,
			maxOutput: item.engine.maxOutput,
			maxTorque: item.engine.maxTorque,
		}))

/**
 * 성능 정보 필터링
 * @param items 선택한 차량 목록(최대 4대)
 * @returns
 */
export const selectQualityData = (items: FixedItemCardArray) =>
	items
		.filter(item => !!item)
		.map(item => ({
			id: item.id,
			dataId: item.quality.dataId,
			zeroToHundred: item.quality.zeroToHundred,
			maxSpeed: item.quality.maxSpeed,
			fuelEfficiency: item.quality.fuelEfficiency,
		}))

/**
 * 제원 정보 필터링
 * @param items 선택한 차량 목록(최대 4대)
 * @returns
 */
export const selectSpecData = (items: FixedItemCardArray) =>
	items
		.filter(item => !!item)
		.map(item => ({
			id: item.id,
			dataId: item.spec.dataId,
			overallLength: item.spec.overallLength,
			overallWidth: item.spec.overallWidth,
			overallHeight: item.spec.overallHeight,
			wheelbase: item.spec.wheelbase,
			curbWeight: item.spec.curbWeight,
		}))

/**
 * 제원 정보 필터링
 * @param items 선택한 차량 목록(최대 4대)
 * @returns
 */
export const selectCarryData = (items: FixedItemCardArray) =>
	items
		.filter(item => !!item)
		.map(item => ({
			id: item.id,
			dataId: item.carrying.dataId,
			seatingCapacity: item.carrying.seatingCapacity,
			cargoVolume: item.carrying.cargoVolume,
		}))

/**
 * 편의사양 필터링
 * @param items 선택한 차량 목록(최대 4대)
 * @returns
 */
export const selectConvenienceFeaturesData = (items: FixedItemCardArray) =>
	items
		.filter(item => !!item)
		.map(item => ({
			id: item.id,
			dataId: item.convenienceFeatures.dataId,
			convenienceFeatures: item.convenienceFeatures,
		}))
