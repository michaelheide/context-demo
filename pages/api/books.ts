// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Book = {
  id: string;
  author: string;
  title: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Book[]>,
) {
res.status(200).json([{ id: "1", author: "John Doe", title: "Hello World" }, { id: "2", author: "Jane Doe", title: "Hello Next.js" }]);
}
