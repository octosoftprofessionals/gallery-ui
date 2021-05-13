import React from 'react'
import queryString from 'query-string'

const useQueryParams = () => {
  const location = typeof window !== 'undefined' ? window?.location : {}
  const queryParams = queryString.parse(location?.search ?? '')
  return queryParams
}

export default useQueryParams
