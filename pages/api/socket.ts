import { NextApiRequest, NextApiResponse } from "next";
import { Server } from "socket.io";
import type { Socket } from "socket.io";
import type { Socket as NetSocket } from 'net';
import type { Server as HttpServer } from 'http';

// Next.jsの型定義を拡張してSocket.IOの型定義を追加
type ReseponseWebSocket = NextApiResponse & {
  socket: NetSocket & { server: HttpServer & { io?: Server } };
};

export default function handler(
	req: NextApiRequest, res: ReseponseWebSocket
) {

    if (req.method !== "POST") {
        return res.status(405).end();
    }

    // socket.ioサーバが起動済ならリターン
    if (res.socket.server.io) {
        return res.end("server is already running")
    }

    // socker serverが起動していない状態なので、起動。
    const io = new Server(res.socket.server, { addTrailingSlash: false });
    // 各イベントを設定
    io.on("connection", (socket: Socket) => {
        socket.on("sendMessage", (data) => {
            console.log(data)

            io.emit("receivedMessage", data)
            
        })
        socket.on("disconnect", () => console.log("disconnected"))
        socket.emit("msg", "hello, from server!")
    })
    res.socket.server.io = io;

    return res.end();
}