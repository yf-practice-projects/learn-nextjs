"use client"

import { Session } from "next-auth"
import { signOut } from 'next-auth/react';
import Link from "next/link"

const Header = ({ session }: {session:Session|null}) => {
	return (
		<div className="border-b">
			{session
				? <div>
						<div className="text-right"> {session.user?.name}</div>
						<button className="float-right" onClick={() => signOut()}>LogOut</button>
					</div>
				: <div className="text-right">
						<Link href={"/login"}><button className="">Login</button></Link>
					</div>
			}
			
		</div>
	)
}

export default Header