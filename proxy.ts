import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
export async function proxy(request: NextRequest) {

  const session = request.cookies.get('session')
  var data = ''

  if (session) {
    const fetched = await fetch('http://localhost:8000/auth/session', {
      headers: {
        cookie : `session=${session.value}`
      }
    })

    data = await fetched.json()
  }
  return NextResponse.json({sessionData : data})
}
  