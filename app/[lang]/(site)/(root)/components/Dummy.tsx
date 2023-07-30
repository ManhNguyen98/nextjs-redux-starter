'use client'
import { useTranslation } from '@/app/i18n/client'

const Dummy = () => {
  const { t } = useTranslation()

  return <h1>{t('test')}</h1>
}

export default Dummy
