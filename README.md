## Figma

https://www.figma.com/board/SmPY0GYzM5IXnJFF6oAxZ3/CarSheet-next?node-id=0-1&t=4CYpydzlWSReK7kc-1

## Front-end

- Next.js v16, React v19
- Tailwind CSS, Shadcn/UI

## Back-end

- Supabase(PostgreSQL) Free 플랜 이용
- Wikimedia 및 제조사 공식 이미지 크롤링
- DB에는 이미지 URL + 라이선스 정보만 저장
  |vehicles_common(차량 공통 정보)|vehicles_images(차량 이미지)
  |------||------|
  |id(pk)|vehicle_id, main_image_id(fk)|
  |index idx_vehicles_brand_model(brand, model)|index idx_images_vehicle_id(vehicle_id), unique index uq_images_hash(image_hash)|
- DB에서 unique 지정해서 이미지 중복 insert 막고, conflict 쿼리로 충돌도 방지함
- 크롤링 작업 테이블과 이미지 로그 테이블 생성
- 이미지 에러 코드, 크롤링 상태 코드는 enum으로 관리

## Image

- 차량 이미지는 저작권 이슈를 고려하여 파일을 저장하지 않고 원본 URL을 참조하는 방식으로 처리
- 배포 환경에서는 이미지를 비활성화하고 로컬 개발 환경에서만 확인할 수 있도록 환경 분리
- 외부 이미지는 hotlink 목적이라 img 태그 사용, placeholder, 자체 이미지 등은 next/image 사용

## Reference

- ...
