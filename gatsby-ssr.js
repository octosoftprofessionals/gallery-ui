import React from 'react'
import { RecoilRoot } from 'recoil'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { ChainId, DAppProvider } from '@usedapp/core'

const config = {
  readOnlyChainId: ChainId.Mainnet,
  readOnlyUrls: {
    [ChainId.Mainnet]:
      'https://mainnet.infura.io/v3/655cfb5bb2bb42b2bc96f812738a29f8',
  },
}

export const wrapPageElement = ({ element }) => {
  const queryClient = new QueryClient()
  return (
    <RecoilRoot>
      <DAppProvider config={config}>
        <QueryClientProvider client={queryClient}>
          {element}
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </DAppProvider>
    </RecoilRoot>
  )
}
