import Head from "next/head"
import Image from "next/image"

import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'My Page Title',
}
 

export default function Page() {
	return (
		<>			
		{/* <Head>
			<title>HeadTitle</title>
			<meta name="description" content="This is description" />
		</Head> */}
			<div className="bg-black">
				<Image
					src="/vercel.svg"
					alt="Vercel Logo"
					className="dark:invert"
					width={100}
					height={24}
					priority
				/>
			</div>
		</>
	)
}