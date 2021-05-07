import React from 'react'
import { useQuery } from 'react-query'

import Layout from '../../components/Layout/Layout'
import Creator from '../../components/Creator'

import { getCreator } from '../../services/autionsService'

import { backgroundGradient } from '../../components/Styles/Colors'

const CreatorPage = () => {
  const { data: CreatorQuery, status: statusCreatorQuery } = useQuery(
    'CreatorQuery',
    getCreator
  )

  const urlCover = CreatorQuery
    ? CreatorQuery.creator.coverImageUrl
    : backgroundGradient.backgroundGradient2

  return (
    <Layout padding="0" marginTop="0" height backgroundImage={urlCover}>
      <Creator creatorQuery={CreatorQuery ? CreatorQuery.creator : ''} />
    </Layout>
  )
}

export default CreatorPage
