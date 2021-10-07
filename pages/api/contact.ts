// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
type Data = {
  status: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const mail = require("@sendgrid/mail");
  mail.setApiKey(process.env.SENDGRID_API_KEY);
  const body = JSON.parse(req.body);

  const message = `
    Name: ${body.name}\r\n
    Email: ${body.email}\r\n
    Message: ${body.message}
  `;

  const data = {
    to: "james@dapperdesigner.com",
    from: "james@dapperdesigner.com",
    subject: `New message from ${body.name}`,
    text: message,
    html: message.replace(/\r\n/g, "<br />"),
  };
  await mail.send(data);
  return res.status(200).json({ status: "Message Sent!" });
}
