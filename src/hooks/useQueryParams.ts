import React from 'react'
import queryString from 'query-string'

const useQueryParams = (): queryString.ParsedQuery => {
  const location =
    typeof window !== 'undefined' ? window?.location : { search: '' }
  const queryParams = queryString.parse(location?.search ?? '')
  return queryParams
}

export const useQueryHash = (): string => {
  const location =
    typeof window !== 'undefined' ? window?.location : { hash: '' }
  const queryHash = location?.hash.substring(1)
  return queryHash
}

export default useQueryParams
