"use client"
import Image from "next/image"
import { useState } from "react"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules'

interface props {
	name:string
}

const SelectedPinDialog = (name:props) => {
	const [pageNum, setPageNum] = useState<number>(0)

	const pics = [
		"/cat/cat1.jpg","/cat/cat2.jpg","/cat/cat3.jpg","/cat/cat4.jpg","/cat/cat5.JPG"
	]

	const closeDialog = () => {
		(document.getElementById("selected-pin-dialog") as HTMLDialogElement).close()
	}

	const selectPicture = (num:number) => {
		setPageNum(num);
		(document.getElementById("selected-picture-dialog") as HTMLDialogElement).showModal();
		
	}

	const movePage = (fluctuation:number) => {
		const num = pageNum + fluctuation
		console.log(num)
		console.log(pics.length)
		if (num < 0) {
			setPageNum(0)
		} else if (pics.length -1 < num) {
			setPageNum(pics.length-1)
		} else {
			setPageNum(num)
		}
	}

	return (
		<>
			<dialog id="selected-pin-dialog" className="border-none rounded-lg shadow-md w-1/2 h-full m-auto fixed box-border max-w-screen-sm animate-slide-in-bottom">
				<div className="flex flex-col w-full relative p-4">
					<div className="w-full float-right justify-end">
						<button type="button" onClick={closeDialog} className="align-middle text-black text-3xl float-right">✕</button>
					</div>
					<Swiper
						pagination={{
							dynamicBullets: true,
						}}
						modules={[Pagination]}
						className="h-14 w-full"
					>
						<SwiperSlide>Slide 1</SwiperSlide>
						<SwiperSlide>Slide 2</SwiperSlide>
						<SwiperSlide>Slide 3</SwiperSlide>
					</Swiper>
					<div className="w-full text-xl">
						横須賀中央駅
					</div>
					<div className="flex flex-col mt-5">
						<div className="flex flex-row w-full">
							<div className="w-1/3"><span>住所</span></div>
							<div className="w-2/3">
								<a href="https://maps.app.goo.gl/3kYGMeeGWHUHZkwBA" className="w-auto max-w-full text-blue-900 no-underline" target="_blank"><span>〒238-0007 神奈川県横須賀市若松町２丁目２５</span></a>
							</div>
						</div>
						<div className="flex flex-row w-full">
							<div className="w-1/3"><span>電話番号</span></div>
							<div className="w-2/3"><span>080-9999-9999</span></div>
						</div>
						<div className="flex flex-row w-full">
							<div className="w-1/3"><span>サイト</span></div>
							<div className="w-2/3"><a href="https://maps.app.goo.gl/3kYGMeeGWHUHZkwBA" className="w-auto max-w-full text-blue-900 no-underline" target="_blank"><span>温泉地</span></a></div>
						</div>
						<div className="flex flex-row w-full">
							<div className="w-1/3"><span>営業時間</span></div>
							<div className="w-2/3"><span>平日10:30~21:30/土日祝11:00~22:00</span></div>
						</div>
						<div className="flex flex-row w-full">
							<div className="w-1/3"><span>休業日</span></div>
							<div className="w-2/3"><span>年中無休</span></div>
						</div>
					</div>
					<div className="flex flex-wrap gap-2 content-start mt-5">
						{pics.map((pic,index) => (
							<button key={index} type="button" onClick={() => selectPicture(index)}><Image src={ pic } width={150} height={150} style={{ width: "145px", height: "145px" }} alt="cat"></Image></button>
						))}
					</div>
				</div>
			</dialog>
			<dialog id="selected-picture-dialog" className="top-0 left-0 w-full h-full bg-black/[0.4]">
				<div className="flex flex-col justify-center items-center w-full h-full" onClick={() => (document.getElementById("selected-picture-dialog") as HTMLDialogElement).close()}>
					<div className="max-w-[640px]">
						<Image onClick={(e) => e.stopPropagation()} src={ pics[pageNum] } width={640} height={640} alt="cat"></Image>
						<div className="flex flex-row justify-between" onClick={(e) => e.stopPropagation()}>
							<button onClick={(e) => { e.stopPropagation(); movePage(-1); } } className="text-white m-4 text-5xl h-16 w-full">◀</button>
							<button onClick={(e) => { e.stopPropagation(); movePage(1) } } className="text-white m-4 text-5xl h-16 w-full">▶</button>
						</div>
					</div>
				</div>
			</dialog>
		</>
	)
}

export default SelectedPinDialog	