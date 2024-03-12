import Image from "next/image"

const closeDialog = () => {
	(document.getElementById("selected-pin-dialog") as HTMLDialogElement).close()
}

const SelectedPinDialog = () => {
	return (
		<dialog id="selected-pin-dialog" className="border-none rounded-lg shadow-md w-1/2 m-auto fixed box-border">
			<div className="flex flex-col w-full relative">
				<div className="absolute mr-0 ml-full w-full float-right justify-end">
						<button type="button" onClick={closeDialog} className="align-middle text-black text-3xl float-right mr-2 mt-2">✕</button>
					</div>
					<div className="w-full">
						店舗名
					</div>
					<div>
						<a href="https://maps.app.goo.gl/3kYGMeeGWHUHZkwBA" className="w-auto max-w-full text-blue-900 no-underline" target="_blank"><span>温泉地</span></a>
					</div>
				</div>
				
				<div className="flex flex-wrap gap-2 content-start">
					<Image src="/cat/cat1.jpg" width={150} height={150} style={{width:"150px", height:"150px"}} alt="cat"></Image>
					<Image src="/cat/cat2.jpg" width={150} height={150} style={{width:"150px", height:"150px"}} alt="cat"></Image>
					<Image src="/cat/cat3.jpg" width={150} height={150} style={{width:"150px", height:"150px"}} alt="cat"></Image>
					
				</div>
			
		</dialog>
	)
}

export default SelectedPinDialog