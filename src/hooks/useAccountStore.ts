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
  const { account } = useEthers()
  const etherBalance = useEtherBalance(account)
  const balanceFormated = etherBalance && formatEther(etherBalance)
  const metamaskAccount = useMetamaskAccount()
  const setMetamaskAccount = useSetMetamaskAccount()
  const setAccount = (account) => {  
    if (account) {
      setMetamaskAccount(account)
      saveStore('account', account)
    } else {
      return
    }
  }
  return {
    account: account,
    balance: balanceFormated,
    setAccount,
    metamaskAccount: metamaskAccount
  }
}
