import React, { useState } from 'react'

import { useMetamaskAccount } from '../../atom'
import Layout from '../../components/Layout'
import Creator from '../../components/Creator'
import useQueryParams from '../../hooks/useQueryParams'

const linkShareTwitter = () => {
  const SITE_URL = typeof window !== 'undefined' ? window.location.href : ''
  const searchParams = new URLSearchParams()
  searchParams.set('url', SITE_URL)
  searchParams.set('text', 'Art is lit! Check this out!')
  return `https://twitter.com/share?${searchParams.toString()}`
}

const CreatorPage = () => {
  const { id: creatorId, address: creatorAddress = '' } = useQueryParams()

  // TODO: if creatorAddress is invalid, show not found or redirect
  // ...

  const accountAddress = useMetamaskAccount()
  const isMyAccount = (typeof accountAddress === 'string') && (creatorAddress.toLowerCase() === accountAddress.toLowerCase())

  const [displayReportModal, setDisplayReportModal] = useState(false)

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
