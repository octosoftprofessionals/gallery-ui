import React, { useState } from 'react'
import { useQuery } from 'react-query'
import queryString from 'query-string'

import Layout from '../../components/Layout'
import Creator from '../../components/Creator'

import { getCreator } from '../../services/autionsService'

import { backgroundGradient } from '../../components/Styles/Colors'
import useQueryParams from '../../hooks/useQueryParams'

const linkShareTwitter = () => {
  const SITE_URL = typeof window !== 'undefined' ? window.location.href : ''
  const searchParams = new URLSearchParams()
  searchParams.set('url', SITE_URL)
  searchParams.set('text', 'Art is lit! Check this out!')
  return `https://twitter.com/share?${searchParams.toString()}`
}

const CreatorPage = () => {
  const { id: creatorId } = useQueryParams()

  const [displayReportModal, setDisplayReportModal] = useState(false)
  const { data: creatorQuery, isLoading } = useQuery('CreatorQuery', getCreator)

  return (
    <Layout padding="0" marginTop="0" height backgroundImage={''}>
      <Creator
        linkTwitter={linkShareTwitter()}
        setDisplayReportModal={setDisplayReportModal}
        isLoading={isLoading}
        creatorQuery={creatorQuery}
      />
    </Layout>
  )
}

export default CreatorPage
