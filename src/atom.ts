import {
  atom,
  MutableSnapshot,
  useRecoilValue,
  useSetRecoilState,
} from 'recoil'

import { MetamaskAccountType } from './types'

const metamaskAccount = atom<MetamaskAccountType>({
  key: 'account',
  default: {},
})

export const useSetMetamaskAccount = () => useSetRecoilState(metamaskAccount)
export const useMetamaskAccount = () => useRecoilValue(metamaskAccount)
