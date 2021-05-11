import React, { useState } from 'react'
import { useQuery } from 'react-query'

import Layout from '../../components/Layout/Layout'
import Creator from '../../components/Creator'

import { getCreator } from '../../services/autionsService'

import { backgroundGradient } from '../../components/Styles/Colors'

const linkShareTwitter = () => {
  const SITE_URL = window.location.href
  const searchParams = new URLSearchParams()
  searchParams.set('url', SITE_URL)
  searchParams.set('text', 'Art is lit! Check this out!')
  return `https://twitter.com/share?${searchParams.toString()}`
}

const CreatorPage = () => {
  const [displayReportModal, setDisplayReportModal] = useState(false)
  const IdArtwork = new URLSearchParams(location.search)
  const { data: CreatorQuery } = useQuery('CreatorQuery', () =>
    getCreator(IdArtwork.values().next().value)
  )

  const urlCover = CreatorQuery
    ? CreatorQuery.creator.coverImageUrl
    : backgroundGradient.backgroundGradient2

  return (
    <Layout padding="0" marginTop="0" height backgroundImage={urlCover}>
      <Creator
        creatorQuery={CreatorQuery ? CreatorQuery.creator : ''}
        linkTwitter={linkShareTwitter()}
        setDisplayReportModal={setDisplayReportModal}
      />
    </Layout>
  )
}

export default CreatorPage
