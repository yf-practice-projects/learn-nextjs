"use client"
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";
import { inputFieldsType, inputFormSchema } from "./schema"
import { zodResolver } from "@hookform/resolvers/zod";

interface inputFields {
  name: string;
  num: number;
  listBox:number;
}

const types = [
  { id: 1, name: "js" },
  { id: 2, name: "java" },
  { id: 3, name: "python" },
  { id: 4, name: "Go" }
  
]

export default function Home() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<inputFieldsType>({resolver:zodResolver(inputFormSchema)});
  const onSubmit:SubmitHandler<inputFields> = (data) => console.log(data);
  return (
    <div className="text-center">
      <form onSubmit={handleSubmit(onSubmit)} className="flex-col">
        <div className="m-2">
          <label htmlFor="name">name</label>
          <input
            id="name"
            {...register("name")}
          />
          {errors.name && <p>{errors.name.message}</p>}
        </div>
        
        <div className="m-2">
          <label htmlFor="num">数値</label>
          <input
            id="num"
            type="number"
            {...register("num")}
          />
          {errors.num && <p>{errors.num.message}</p>}
        </div>
        <div className="m-2">
          <label htmlFor="listBox">セレクトボックス</label>
          <select {...register("listBox")}>
            <option value="">選択してください</option>
            {types.map((item) => (
              <option key={item.id} value={item.id}>{item.name}</option>
            ))}
          </select>
          {errors.listBox && <p>{errors.listBox.message}</p>}
        </div>
        <button type="button" className="m-2" onClick={()=>reset()}>clear</button>
        <button type="submit" className="m-2">submit</button>
      </form>
      <Link href="/zod">Zod link</Link>
    </div>
  );
}
