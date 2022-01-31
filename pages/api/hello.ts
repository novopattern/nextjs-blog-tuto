import { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  text: string
}

export default function helloHandler (req: NextApiRequest, res: NextApiResponse<Data>) {
  res.status(200).send({ text: 'Hello' })
}
