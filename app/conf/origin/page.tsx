"use client"


const get = async() => {
	await fetch("/api/confOrigin", {
		method:"GET"
	})
}

const post = async() => {
	await fetch("/api/confOrigin", {
		method:"POST"
	})
}

export default function Page() {
	return (
		<div>
			<button type="button" onClick={get}>GET</button>
			<button type="button" onClick={ post }>POST</button>
		</div>
	)
}