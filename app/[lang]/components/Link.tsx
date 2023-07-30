'use client'
import { fallbackLng } from '@/app/i18n/settings'
import Link from 'next/link'
import { useParams } from 'next/navigation'

const LinkCustom = ({ children, skipLocaleHandling, ...rest }: any) => {
  const params = useParams()
  const locale = params?.lang || fallbackLng
  let href = rest.href

  if (href.indexOf('http') === 0) skipLocaleHandling = true
  if (locale && !skipLocaleHandling) {
    href = `/${locale}${href}`
  }

  return (
    <>
      <Link href={href} legacyBehavior>
        <a {...rest}>{children}</a>
      </Link>
    </>
  )
}

export default LinkCustom
