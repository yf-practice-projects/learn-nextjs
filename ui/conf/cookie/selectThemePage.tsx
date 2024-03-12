
"use client"

import { useEffect, useState } from "react"
import { getCookie } from 'cookies-next';

const SelectThemePage = () => {
	
	const [themeState, setThemeState] = useState<string>()

	useEffect(() => {
		const cookie = getCookie("theme")
		console.log(cookie)
		if (cookie === 'dark') {
			document.body.style.backgroundColor = '#333';
		} else {
			document.body.style.backgroundColor = '#fff';
		}
	},[themeState])

	const setTheme = async(theme: string) => {
		await fetch("/api/confCookie", {
			method: "POST",
			body: JSON.stringify(theme)
		}).then(() => {
			setThemeState(theme)
			console.log(theme)
		})
		
	}
	return (
		<div>
			<button onClick={() => setTheme("light")} className="text-white">ライト</button>
			<button onClick={() => setTheme("dark")} className="text-black">ダーク</button>
		</div>
	)
}

export default SelectThemePage