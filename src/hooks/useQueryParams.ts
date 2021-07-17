import React from 'react'
import queryString from 'query-string'

const useQueryParams = (): queryString.ParsedQuery => {
  const location =
    typeof window !== 'undefined' ? window?.location : { search: '' }
  const queryParams = queryString.parse(location?.search ?? '')
  return queryParams
}

export default useQueryParams
