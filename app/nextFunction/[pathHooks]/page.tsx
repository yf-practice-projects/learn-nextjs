"use client"

import { useParams, usePathname, useRouter, useSearchParams } from "next/navigation"

export default function Page() {
	const params = useParams()
	console.log("useParams")
	console.log(params)
	
	const pathname = usePathname()

	const searchParams = useSearchParams()
	const search = searchParams.get('test')
	
	const router = useRouter();

	// 関数コンポーネントから画面遷移させる場合はrouterを使う
	const pushHandler = () => {
		router.push("/")
	}
	// replaceの場合、戻るボタンで戻ることができなくなる
	const replaceHandler = () => {
		router.replace("/");
	}
	
	return (
		<div className="flex flex-col text-center">
			<p className="m-4">Current params: {params.pathHooks}</p>
			<p className="m-4">Current pathname: {pathname}</p>
			<p className="m-4">Current searchParams: {search}</p>

			<button type="button" onClick={pushHandler}>
	      push router
			</button>
			
			<button type="button" onClick={replaceHandler}>
  	    replace router
    	</button>

		</div>
	)	
}