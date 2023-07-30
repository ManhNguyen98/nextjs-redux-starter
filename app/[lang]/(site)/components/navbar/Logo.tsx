'use client'
import Link from 'next/link'
import { useParams } from 'next/navigation'

const Logo = () => {
  const params = useParams()

  return (
    <Link className="navbar-brand" href={`/${params?.lang}`}>
      <div className="uppercase bg-slate-300 px-4 py-2">Your logo</div>
    </Link>
  )
}

export default Logo
