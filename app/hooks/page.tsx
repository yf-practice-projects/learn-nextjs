import Link from "next/link";

export default function Page() {
	return (
		<div className="flex flex-col text-center">
			<Link
				className="m-4"
				href="/hooks/useMemo">useMemo</Link>
			<Link
				className="m-4"
				href="/hooks/useCallback">useCallback</Link>
			<Link
				className="m-4"
				href="/hooks/useReducer">useReducer</Link>
		</div>
	)
}