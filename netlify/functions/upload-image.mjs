async function sha1(str) {
  const encoder = new TextEncoder()
  const data = encoder.encode(str)
  const hash = await crypto.subtle.digest('SHA-1', data)
  return Array.from(new Uint8Array(hash)).map(b => b.toString(16).padStart(2, '0')).join('')
}

export default async (req) => {
  if (req.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 })
  }

  let body
  try {
    body = await req.json()
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid request' }), { status: 400 })
  }

  if (body.password !== process.env.VITE_ADMIN_PASSWORD) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 })
  }

  const cloudName = process.env.VITE_CLOUDINARY_CLOUD_NAME
  const apiKey = process.env.CLOUDINARY_API_KEY
  const apiSecret = process.env.CLOUDINARY_API_SECRET
  const timestamp = Math.floor(Date.now() / 1000)

  const sigStr = `invalidate=true&overwrite=true&public_id=noemi-idopontok&timestamp=${timestamp}${apiSecret}`
  const signature = await sha1(sigStr)

  const base64Data = body.file.split(',')[1]
  const mimeType = body.file.split(';')[0].split(':')[1]
  const binaryStr = atob(base64Data)
  const bytes = new Uint8Array(binaryStr.length)
  for (let i = 0; i < binaryStr.length; i++) bytes[i] = binaryStr.charCodeAt(i)
  const blob = new Blob([bytes], { type: mimeType })

  const formData = new FormData()
  formData.append('file', blob, 'idopontok.jpg')
  formData.append('public_id', 'noemi-idopontok')
  formData.append('overwrite', 'true')
  formData.append('invalidate', 'true')
  formData.append('timestamp', String(timestamp))
  formData.append('api_key', apiKey)
  formData.append('signature', signature)

  const cloudRes = await fetch(
    `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
    { method: 'POST', body: formData }
  )

  const result = await cloudRes.json()
  return new Response(JSON.stringify(result), {
    status: cloudRes.status,
    headers: { 'Content-Type': 'application/json' }
  })
}

export const config = { path: '/api/upload-image' }
