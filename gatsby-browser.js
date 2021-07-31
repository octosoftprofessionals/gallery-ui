import React from 'react'
import { RecoilRoot } from 'recoil'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { linkStorage } from './src/Utils'

const LocaleContext = React.createContext()

linkStorage()

export const wrapPageElement = ({ element }) => {
  const queryClient = new QueryClient()
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <LocaleContext.Provider value={window.location}>
          {element}
        </LocaleContext.Provider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </RecoilRoot>
  )
}
