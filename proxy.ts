import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'
 
export async function proxy(request: NextRequest) {

  const url = request.nextUrl.clone()
  const session = request.cookies.get('session')
  const restrictedPaths = ['/dashboard']

  var sessionJson = null

  if (session) {
    const fetched = await fetch('http://localhost:8000/auth/session', {
      headers: {
        cookie : `session=${session.value}`
      }
    })

    if (fetched.status == 200) {
      sessionJson = await fetched.json()
    }
  }

  if (url.pathname.startsWith("/_next")) return NextResponse.next();

  if (process.env.NEXT_PUBLIC_STATUS_CODE! == '1' && url.pathname != '/construction') {
    url.pathname = '/construction'
    return NextResponse.redirect(url)
  }
  else if (process.env.NEXT_PUBLIC_STATUS_CODE! != '1' && request.nextUrl.pathname == '/construction') {
    url.pathname = '/'
    return NextResponse.redirect(url)
  }

  // Check IF restricted
  if (restrictedPaths.indexOf(request.nextUrl.pathname) != -1) {
    if (sessionJson == null) {
      return NextResponse.redirect(process.env.NEXT_PUBLIC_AUTH_LOGIN!)
    }
  }

  return NextResponse.next()
}
  