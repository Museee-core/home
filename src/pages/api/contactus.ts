// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { createTransport } from 'nodemailer'

const transport = createTransport(process.env.EMAIL_SERVER)

type Data = {
  success: boolean
  msg?: string
  data?: any
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  if (req.method === 'POST') {
    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_FROM,
      subject: 'Museee 用户留资信息',
      text: '已收到新的用户留资信息，请尽快处理',
      html: `
                  <p>收到来自以下用户的留资信息：</p>
                  <p>用户名：${req.body.name}</p>
                  <p>联系方式：${req.body.contact}</p>
                  <p>用户诉求：${req.body.demands}</p>  
                  <p>留资时间：${new Date().toString()}</p>
                `,
    }

    await transport.sendMail(mailOptions)
    res.status(200).json({ success: true })
  }
}
