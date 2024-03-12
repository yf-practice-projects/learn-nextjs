import { cookies } from "next/headers"
import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
	
	const body = await request.json()
	console.log(body)
	cookies().set("theme",body)
  return NextResponse.json({status: 200})
}