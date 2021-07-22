import React, { useEffect, useState } from 'react'

// save metamask account value on localStorage
export function useLocalState(key, initial) {
  const [storedAccount, setStoredAccount] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = window.localStorage.getItem(key)
      if (saved !== null) {
        return JSON.parse(saved)
      }
    }
    return initial
  })

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(key, JSON.stringify(storedAccount))
    }
  }, [storedAccount])

  const setAccount = account => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore =
        account instanceof Function ? account(storedAccount) : account
      // Save state
      setStoredAccount(valueToStore)
      // Save to local storage
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(valueToStore))
      }
    } catch (error) {
      // A more advanced implementation would handle the error case
      console.log(error)
    }
  }
  return [storedAccount, setAccount]
}
