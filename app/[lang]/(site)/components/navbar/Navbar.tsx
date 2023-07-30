'use client'
import clsx from 'clsx'
import Link from 'next/link'
import { useParams, usePathname } from 'next/navigation'
import LocaleSwitcher from './LocaleSwitcher'
import Logo from './Logo'
import ThemeSwitcher from './ThemeSwitcher'

const Navbar = () => {
  const params = useParams()
  const pathname = usePathname()

  return (
    <nav className="flex h-[48px] shadow-sm px-6 py-3 justify-between items-center gap-4">
      <Logo />
      <div className="flex-1 justify-end flex gap-4 items-center">
        <div className="flex gap-4 items-center flex-1 justify-center">
          <Link
            href={`/${params?.lang}`}
            className={clsx({
              'text-purple-700 underline underline-offset-4':
                pathname === `/${params?.lang}/`,
            })}
          >
            Home
          </Link>
          <Link
            href={`/${params?.lang}/about`}
            className={clsx({
              'text-purple-700 underline underline-offset-4':
                pathname?.includes('/about'),
            })}
          >
            About
          </Link>
          <Link href={`/${params?.lang}/c/1`}>Page Detail</Link>
          <Link href={`/${params?.lang}/page2`}>Page 2</Link>
          <Link href={`/${params?.lang}/login`}>Login</Link>
        </div>
        <LocaleSwitcher />
        <ThemeSwitcher />
      </div>
    </nav>
  )
}

export default Navbar
