"use client";
import { useEffect, useState } from "react";
import { io } from "socket.io-client";

const socket = io({ autoConnect: false });

export default function Content() {
	const [message, setMessage] = useState("")
	const [list,setList] = useState<string[]>([])

  const sendMessage = () => {
    connect()
		socket.emit("sendMessage", { message: message })
    setMessage("")
	}

  // １回だけ実行
  useEffect(() => {
    // socket.ioサーバを起動するapiを実行
    // connect()
    // fetch("/api/socket", { method: "POST" })
    //   .then(() => {
    //     // 既に接続済だったら何もしない
    //     if (socket.connected) {
    //       return;
    //     }
    //     // socket.ioサーバに接続
    //     socket.connect();
    //     // socket.ioのイベント登録する場合はここに
    //     socket.on("connect", () => { console.log("connected!") })
    //     // socket.ioサーバから送られてきたメッセージを出力
    //     socket.on("msg", (msg) => { console.log(msg) })
    //     socket.on("receivedMessage", (data: {message:string}) => {
    //       console.log(data);
    //       setList((listData)=>[...listData, data.message]);
    //     })
    //   })

    return () => {
      // 登録したイベントは全てクリーンアップ
      socket.off("connect")
      socket.off("msg")
      socket.off("receivedMessage");
    }
  }, [])

  const connect = async () => {
    await fetch("/api/socket", { method: "POST" })
    // 既に接続済だったら何もしない
    if (socket.connected) {
      return;
    }
    // socket.ioサーバに接続
    socket.connect();
    // socket.ioのイベント登録する場合はここに
    socket.on("connect", () => { console.log("connected!") })
    // socket.ioサーバから送られてきたメッセージを出力
    socket.on("msg", (msg) => { console.log(msg) })
    socket.on("receivedMessage", (data: {message:string}) => {
      console.log(data);
      setList((listData)=>[...listData, data.message]);
    })
  }

  return (
    <div className="text-center">
			<h1>socket.io シンプルな接続例</h1>
			<div>
				<input type="text" placeholder="テキストエリア" value={ message }
					onChange={(e) => setMessage(e.target.value)}></input>
				<button onClick={() => sendMessage()}>送信</button>
			</div>
			<div>
				{list.map((data, index) => (
					<div key={index}>{data}</div>
				))}
			</div>
    </div>
  );
}