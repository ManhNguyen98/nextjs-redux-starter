'use client'

import i18next from 'i18next'
import { useEffect } from 'react'
import {
  initReactI18next,
  useTranslation as useTranslationOrg,
} from 'react-i18next'
import resourcesToBackend from 'i18next-resources-to-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import { fallbackLng, getOptions } from './settings'
import { useParams } from 'next/navigation'

// on client side the normal singleton is ok
i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(
    resourcesToBackend(
      (language: string, namespace: string) =>
        import(`./locales/${language}/${namespace}.json`)
    )
  )
  // .use(LocizeBackend) // locize backend could be used on client side, but prefer to keep it in sync with server side
  .init({
    ...getOptions(),
    lng: undefined, // let detect the language on client side
    detection: {
      order: ['path', 'htmlTag', 'cookie', 'navigator'],
    },
  })

const runsOnServerSide = typeof window === 'undefined'

export function useTranslation() {
  const params = useParams()
  const lng = (params?.lang as string) || fallbackLng
  const ns = 'translation'
  const ret = useTranslationOrg(ns)
  const { i18n } = ret
  if (runsOnServerSide && i18n.resolvedLanguage !== lng) {
    i18n.changeLanguage(lng)
  } else {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      if (i18n.resolvedLanguage === lng) return
      i18n.changeLanguage(lng)
    }, [lng, i18n])
  }
  return ret
}
