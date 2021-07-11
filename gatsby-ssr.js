import React from 'react'
import { RecoilRoot } from 'recoil'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

export const wrapPageElement = ({ element }) => {
  const queryClient = new QueryClient()
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        {element}
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </RecoilRoot>
  )
}
