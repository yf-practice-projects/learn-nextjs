
export default function Page({ params, searchParams }: {
	params: { pathParameter: string },
	searchParams: {test:string}
}) {
	console.log(params)
	console.log(searchParams)
	return ( 
		<>
			<p>{params.pathParameter}</p>
			<p>{ searchParams.test }</p>
		</>
	)	
}