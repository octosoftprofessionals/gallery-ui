import React, { useState } from 'react'

import { useMetamaskAccount } from '../../atom'
import Layout from '../../components/Layout'
import Creator from '../../components/Creator'

import { getProfileCreatedItemsByAddress } from '../../services/gallery'

import useQueryParams from '../../hooks/useQueryParams'
import { useQuery } from 'react-query'

const linkShareTwitter = () => {
  const SITE_URL = typeof window !== 'undefined' ? window.location.href : ''
  const searchParams = new URLSearchParams()
  searchParams.set('url', SITE_URL)
  searchParams.set('text', 'Art is lit! Check this out!')
  return `https://twitter.com/share?${searchParams.toString()}`
}

const CreatorPage = () => {
  const { address: address } = useQueryParams()

  const [displayReportModal, setDisplayReportModal] = useState(false)
  const {
    data: creatorQuery,
    isLoading,
    status,
  } = useQuery('getProfileCreatedItemsByAddress', () =>
    getProfileCreatedItemsByAddress(address)
  )
  console.log('creatorQuery :>> ', creatorQuery)
  console.log('address :>> ', address)
  console.log('status :>> ', status)
  return (
    <Layout padding="0" marginTop="0" height>
      <Creator
        isMyAccount={false}
        username={'Agus'}
        address={address}
        linkTwitter={linkShareTwitter()}
        setDisplayReportModal={setDisplayReportModal}
      />
    </Layout>
  )
}

export default CreatorPage
