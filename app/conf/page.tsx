import Link from "next/link";

export default function Page() {
	return (
		<div className="flex flex-col text-center">
			<Link
				className="m-4"
				href="/conf/cookie">cookie</Link>
			<Link
				className="m-4"
				href="/conf/origin">origin</Link>
			<Link
				className="m-4"
				href="/conf/websocket">websocket</Link>
		</div>
	)
}