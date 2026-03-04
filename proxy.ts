import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'
 
export async function proxy(request: NextRequest) {

  const session = request.cookies.get('session')
  const restrictedPaths = ['/dashboard']
  var data = ''

  // Check IF restricted
  if (restrictedPaths.indexOf(request.nextUrl.pathname) != -1) {
    if (!session) {
      return NextResponse.redirect(process.env.NEXT_PUBLIC_AUTH_LOGIN!)
    }

  }

  return NextResponse.next()
}
  