'use client'
import clsx from 'clsx'
import Link from 'next/link'
import { useParams, usePathname } from 'next/navigation'
import { useContext } from 'react'

import { languages } from '@/app/i18n/settings'
import { useTheme } from 'next-themes'

export default function LocaleSwitcher() {
  const params = useParams()
  const currentLang = params?.lang
  const pathName = usePathname()
  const { theme } = useTheme()

  const redirectedPathName = (locale: string) => {
    if (!pathName) return '/'
    const segments = pathName.split('/')
    segments[1] = locale
    return segments.join('/')
  }

  return (
    <div className="flex items-center gap-2">
      {languages.map((locale) => {
        const isActive = locale === currentLang
        return (
          <div key={locale}>
            <Link
              className={clsx(
                'uppercase text-purple-700 dark:text-orange-500',
                {
                  'font-bold': isActive,
                }
              )}
              href={redirectedPathName(locale)}
            >
              {locale}
            </Link>
          </div>
        )
      })}
    </div>
  )
}
