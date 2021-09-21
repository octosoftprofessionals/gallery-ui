import { atom, useRecoilValue, useSetRecoilState } from 'recoil'

export const metamaskAccount = atom<string>({
  key: 'account',
  default: null,
})

export const useSetMetamaskAccount = () => useSetRecoilState(metamaskAccount)
export const useMetamaskAccount = () => useRecoilValue(metamaskAccount)

export const modalShow = atom<any>({
  key: 'modalShow',
  default: null,
})

export const useSetModalShow = () => useSetRecoilState(modalShow)
export const useModalShow = () => useRecoilValue(modalShow)
