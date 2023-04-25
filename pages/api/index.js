import { NextRequest } from 'next/server'

export default function handler(req, res) {
  console.log(req.geo, 'geolocation')
  res.status(200).json({ name: 'John Doe', geo: req.geo })
}