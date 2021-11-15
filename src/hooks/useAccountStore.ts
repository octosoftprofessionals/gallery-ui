import { atom, useRecoilValue, useSetRecoilState } from 'recoil'
import { loadStore, saveStore } from './utils'
import { useEthers, useEtherBalance } from '@usedapp/core'
import { formatEther } from '@ethersproject/units'

export const metamaskAccount = atom<string>({
  key: 'account',
  default: loadStore('account', null),
})

export const useSetMetamaskAccount = () => useSetRecoilState(metamaskAccount)
export const useMetamaskAccount = () => useRecoilValue(metamaskAccount)

// save metamask account value on localStorage
export function useAccountStore() {
  const { active, account, activateBrowserWallet } = useEthers()
  const etherBalance = useEtherBalance(account)
  const balanceFormated = etherBalance && formatEther(etherBalance)
  const metamaskAccount = useMetamaskAccount()
  const setMetamaskAccount = useSetMetamaskAccount()
  const newAccount = account && account.toLowerCase()
  const setAccount = account => {
    const valueToStore =
      account instanceof Function ? account(metamaskAccount) : account
    setMetamaskAccount(valueToStore)
    saveStore('account', valueToStore)
  }
  return {
    account: account,
    balance: balanceFormated,
    setAccount,
  }
}
