import setLanguage from 'next-translate/setLanguage'
import { useRouter } from 'next/router'

import useLayoutEffect from './useIsomorphicLayoutEffect'

const locales = ['zh-CN', 'en']

const LOCALE_STORAGE_KEY = 'LOCALE_STORAGE_KEY'

const getBrowserLanguage = () => {
  const lang = navigator.language
  return locales.includes(lang) ? lang : 'zh-CN'
}

export const setLocale = (locale: string) => {
  const date = new Date()
  const expireMs = 365 * 24 * 60 * 60 * 1000 // 365 days
  date.setTime(date.getTime() + expireMs)

  void setLanguage(locale)
  document.cookie = `NEXT_LOCALE=${locale};expires=${date.toUTCString()};path=/`
  localStorage.setItem(LOCALE_STORAGE_KEY, locale)
}

const useLocale = () => {
  const { locale } = useRouter()

  useLayoutEffect(() => {
    const storage =
      localStorage.getItem(LOCALE_STORAGE_KEY) || getBrowserLanguage()
    if (storage !== locale) {
      setLocale(storage)
    }
  }, [])

  return
}

export default useLocale
