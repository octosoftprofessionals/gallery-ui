import React, { useState } from 'react'
import { useQuery } from 'react-query'

import Layout from '../../components/Layout'
import Creator from '../../components/Creator'

import useQueryParams from '../../hooks/useQueryParams'
import Spinner from '../../components/Spinner'
import { getUser } from '../../services/users'

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
  const { data: user, isLoading } = useQuery('creatorQuery', () =>
    getUser({ public_address: address })
  )
  const [coverCreatorImgUrl, setCoverCreatorImgUrl] = useState('')

  return (
    <Layout
      padding="0"
      marginTop="0"
      height
      backgroundImage={coverCreatorImgUrl}
    >
      {isLoading ? (
        <Spinner height="50vh" />
      ) : (
        <Creator
          isMyAccount={false}
          user={user}
          setDisplayReportModal={setDisplayReportModal}
          setCoverImgUrl={setCoverCreatorImgUrl}
        />
      )}
    </Layout>
  )
}

export default CreatorPage
