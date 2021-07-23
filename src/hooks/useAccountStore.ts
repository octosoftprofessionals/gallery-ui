import { atom, useRecoilValue, useSetRecoilState } from 'recoil'
import { loadStore, saveStore } from './utils'

export const metamaskAccount = atom<string>({
  key: 'account',
  default: loadStore('account', null),
})

export const useSetMetamaskAccount = () => useSetRecoilState(metamaskAccount)
export const useMetamaskAccount = () => useRecoilValue(metamaskAccount)

// save metamask account value on localStorage
export function useAccountStore() {
  const metamaskAccount = useMetamaskAccount()
  const setMetamaskAccount = useSetMetamaskAccount()

  const setAccount = account => {
    const valueToStore =
      account instanceof Function ? account(metamaskAccount) : account
    setMetamaskAccount(valueToStore)
    saveStore('account', valueToStore)
  }
  return [metamaskAccount, setAccount]
}
