import React, { useState } from 'react'
import { useQuery } from 'react-query'

import Layout from '../../components/Layout'
import Creator from '../../components/Creator'

import { getProfileAccountByAddress } from '../../services/gallery'

import useQueryParams from '../../hooks/useQueryParams'
import Spinner from '../../components/Spinner'

const linkShareTwitter = () => {
  const SITE_URL = typeof window !== 'undefined' ? window.location.href : ''
  const searchParams = new URLSearchParams()
  searchParams.set('url', SITE_URL)
  searchParams.set('text', 'Art is lit! Check this out!')
  return `https://twitter.com/share?${searchParams.toString()}`
}

const CreatorPage = () => {
  const { address } = useQueryParams()

  const [displayReportModal, setDisplayReportModal] = useState(false)
  const {
    data: creatorQuery,
    isLoading,
  } = useQuery('getProfileAccountByAddress', () =>
    getProfileAccountByAddress(
      typeof address == 'string' ? address : address[0]
    )
  )

  return (
    <Layout padding="0" marginTop="0" height>
      {isLoading ? (
        <Spinner height="50vh" />
      ) : (
        <Creator
          isMyAccount={false}
          username={creatorQuery.username}
          address={creatorQuery.address}
          profileImageUrl={creatorQuery.profileImageUrl}
          linkTwitter={linkShareTwitter()}
          setDisplayReportModal={setDisplayReportModal}
        />
      )}
    </Layout>
  )
}

export default CreatorPage
