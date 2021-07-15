import React, { useState } from 'react'

import { useMetamaskAccount } from '../../atom'
import Layout from '../../components/Layout'
import Creator from '../../components/Creator'

import { createdItemsQuery } from '../../services/gallery'

import useQueryParams from '../../hooks/useQueryParams'

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
  const { data: creatorQuery, isLoading } = useQuery('createdItemsQuery', () =>
    createdItemsQuery({ address })
  )
  console.log('creatorQuery :>> ', creatorQuery)
  console.log('address :>> ', address)
  return (
    <Layout padding="0" marginTop="0" height>
      <Creator
        isMyAccount={isMyAccount}
        username={creatorId}
        address={creatorAddress}
        linkTwitter={linkShareTwitter()}
        setDisplayReportModal={setDisplayReportModal}
      />
    </Layout>
  )
}

export default CreatorPage
