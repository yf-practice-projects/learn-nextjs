import Link from "next/link";

export default function Page() {
	return (
		<div className="flex flex-col text-center">
			<Link
				className="m-4"
				href="/nextFunction/confQuery">nextFunction/confQuery</Link>
			<Link
				className="m-4"
				href="/nextFunction/pathHooks?test=1231">nextFunction/pathHooks?test=1231</Link>
			<Link
				className="m-4"
				href="/serverComponent/path?test=1231">serverComponent/path?test=1231</Link>
			<Link
				className="m-4"
				href="/useForm">useForm</Link>
			<Link
				className="m-4"
				href="/zod">zod</Link>
			<Link
				className="m-4"
				href="/tags">tags</Link>
			<Link
				className="m-4"
				href="/map">map</Link>
			<Link
				className="m-4"
				href="/conf/origin">origin</Link>
			<Link
				className="m-4"
				href="/conf/cookie">cookie</Link>
		</div>
	)
}