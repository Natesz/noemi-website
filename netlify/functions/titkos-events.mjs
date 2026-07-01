import { getStore } from '@netlify/blobs'

export default async (req) => {
  const store = getStore('titkos')

  if (req.method === 'GET') {
    const url = new URL(req.url)
    if (url.searchParams.get('password') !== process.env.TITKOS_PASSWORD) {
      return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 })
    }
    const data = (await store.get('events', { type: 'json' })) || {}
    return new Response(JSON.stringify(data), {
      headers: { 'Content-Type': 'application/json' },
    })
  }

  if (req.method === 'POST') {
    let body
    try {
      body = await req.json()
    } catch {
      return new Response(JSON.stringify({ error: 'Invalid request' }), { status: 400 })
    }

    if (body.password !== process.env.TITKOS_PASSWORD) {
      return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 })
    }

    await store.setJSON('events', body.data || {})
    return new Response(JSON.stringify({ ok: true }), {
      headers: { 'Content-Type': 'application/json' },
    })
  }

  return new Response('Method not allowed', { status: 405 })
}

export const config = { path: '/api/titkos-events' }
