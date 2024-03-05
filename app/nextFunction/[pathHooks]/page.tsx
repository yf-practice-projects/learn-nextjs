"use client"

import { useParams, usePathname, useSearchParams } from "next/navigation"

export default function Page() {
	const params = useParams()
	console.log("useParams")
	console.log(params)
	
	const pathname = usePathname()

	const searchParams = useSearchParams()
  const search = searchParams.get('test')
	
	return (
		<div className="flex flex-col text-center">
			<p className="m-4">Current params: {params.pathHooks}</p>
			<p className="m-4">Current pathname: {pathname}</p>
			<p className="m-4">Current searchParams: {search}</p>
		</div>
	)	
}