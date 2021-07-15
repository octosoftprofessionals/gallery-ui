import React, { useState } from 'react'

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
  const { id: creatorId, address: creatorAddress } = useQueryParams()

  // TODO
  // const { isMyAccount = false } = useAccount()
  const isMyAccount = false

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
