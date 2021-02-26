import { useState } from "react"

const getItem = key => typeof document !== 'undefined' ?
  document.cookie.split("; ").reduce((total, currentCookie) => {
    const item = currentCookie.split("=")
    const storedKey = item[0]
    const storedValue = item[1]
    return key === storedKey ? decodeURIComponent(storedValue) : total
  }, "") : null;

export const useCookie = (key, defaultValue) => {
  const getCookie = () => getItem(key) || defaultValue
  const [cookie, setCookie] = useState(getCookie())

  return [cookie, setCookie]
}
