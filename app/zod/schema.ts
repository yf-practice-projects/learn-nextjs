import { z } from "zod";

export const inputFormSchema = z.object({
  name: z.string().min(1, { message: "nameを入力してください" }),
  num: z.coerce.number().min(1,{ message: "数値を入力してください" }),
  listBox:z.coerce.number().min(1, { message: "リストを選択してください" })
});

export type inputFieldsType = z.infer<typeof inputFormSchema>;