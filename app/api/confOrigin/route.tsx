
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: Request) {
	console.log(request)
	return NextResponse.json({status: 200})
}

export async function GET(request: NextRequest) {
	const allowedOrigin = process.env.ALLOWED_ORIGIN
	console.log(allowedOrigin)
	const origin = request.headers.get("host")
	console.log(request.headers)
	console.log(origin)
	if (allowedOrigin !== origin) {
		return NextResponse.json({ error: 'origin error' },{status: 403})
	}
	return NextResponse.json({status: 200})
}