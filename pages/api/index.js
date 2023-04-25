import { NextRequest } from 'next/server'

export default function handler(NextRequest, res) {
  res.status(200).json({ name: 'John Doe', geo: NextRequest.geo })
}