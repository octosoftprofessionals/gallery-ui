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

  const { data: CreatorQuery, status } = useQuery('CreatorQuery', () =>
    getCreator(creatorId)
  )

  const isLoading = status === 'loading'

  const urlCover = CreatorQuery
    ? CreatorQuery.creator.coverImageUrl
    : backgroundGradient.backgroundGradient2

  return (
    <Layout padding="0" marginTop="0" height backgroundImage={urlCover}>
      <Creator
        creatorQuery={CreatorQuery ? CreatorQuery.creator : ''}
        linkTwitter={linkShareTwitter()}
        setDisplayReportModal={setDisplayReportModal}
        isLoading={isLoading}
      />
    </Layout>
  )
}

export default CreatorPage
