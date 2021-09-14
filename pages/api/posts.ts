// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { getSortedPostsData } from "../../lib/posts";
// type Data = {
//   id: string;
//   title: string;
//   content: string;
// }[];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  res.status(200).send(getSortedPostsData());
}
