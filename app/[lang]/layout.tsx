import { dir } from 'i18next'

import { languages } from '../i18n/settings'
import ThemeProvider from './providers/ThemeProvider'
import { StoreProviders } from '../redux/provider'
import './globals.css'

export const metadata = {
  title: 'Next 13 + Redux Toolkit',
  description: 'Next 13 + Redux Toolkit',
}

export async function generateStaticParams() {
  return languages.map((locale) => ({ lang: locale }))
}

export default function RootLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode
  params: { lang: string }
}) {
  return (
    <html lang={lang} dir={dir(lang)}>
      <body>
        <ThemeProvider>
          <StoreProviders>{children}</StoreProviders>
        </ThemeProvider>
      </body>
    </html>
  )
}
