import {
  atom,
  MutableSnapshot,
  useRecoilValue,
  useSetRecoilState,
} from 'recoil'

// import { MetamaskAccountType } from './types'

export const metamaskAccount = atom<string>({
  key: 'account',
  default: null,
})

export const useSetMetamaskAccount = () => useSetRecoilState(metamaskAccount)
export const useMetamaskAccount = () => useRecoilValue(metamaskAccount)
