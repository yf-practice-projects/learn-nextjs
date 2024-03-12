"use client"

import SelectedPinDialog from "@/ui/map/selectdePinDialog"
import Image from "next/image"
import { useRef, useState } from "react"

type pin = {
	name: string
	x: number
	y: number
}

interface Ipins {
	Ipins:pin[]
}

const cpins: pin[] = [
	{ name: "test", x: 352, y: 336 },
	{ name: "test1", x: 314, y: 300 },
	{ name: "test2", x: 245, y: 300 },
	{ name: "test3", x: 300, y: 444 },

]

export default function Page() {
	const [pins, setPins] = useState<pin[]>(cpins);
	const imageRef = useRef<HTMLImageElement>(null)

	const handleClick = (e: any) => {
		const imageRect = imageRef.current!.getBoundingClientRect();
		const x = e.clientX - imageRect.left; // カーソルの画像に対する相対X座標
    const y = e.clientY - imageRect.top;  // カーソルの画像に対する相対Y座標
		setPins([...pins, {name:"",x:x, y:y}])

  };

	const openDialog = () => {
		(document.getElementById("selected-pin-dialog") as HTMLDialogElement).showModal()
	}

	return (
		<div className="w-full h-full">
			<div className="m-auto w-[628px] h-[810px] relative">
				<Image src="/map.png"
					alt="" width={628} height={810}
					onClick={handleClick} priority
					ref={imageRef}
					
					style={{
						width: '100%',
						height: 'auto',
					}}
				>
				</Image>
				{pins &&pins.map((pin, index) => (
					<button
						onClick={openDialog}
						key={index}
						className="absolute -translate-x-1/2 -translate-y-full"
						style={{ top: `${pin.y}px`, left: `${pin.x}px` }}
					>	<Image src="/pin.png" alt="" height={50} width={50}></Image>
					</button>
				))}
			</div>
			<SelectedPinDialog></SelectedPinDialog>
		</div>
	)
}