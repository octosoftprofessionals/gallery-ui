import React, { useState } from 'react'
import { useQuery } from 'react-query'
import Layout from '../../components/Layout'
import Creator from '../../components/Creator'
import { getCreator } from '../../services/autionsService'
import { backgroundGradient } from '../../components/Styles/Colors'
import useQueryParams from '../../hooks/useQueryParams'
import { galleryItemQuery } from '../../services/gallery'

const linkShareTwitter = () => {
  const SITE_URL = typeof window !== 'undefined' ? window.location.href : ''
  const searchParams = new URLSearchParams()
  searchParams.set('url', SITE_URL)
  searchParams.set('text', 'Art is lit! Check this out!')
  return `https://twitter.com/share?${searchParams.toString()}`
}

const AccountPage = () => {
  const { id: creatorId } = useQueryParams()

  const [displayReportModal, setDisplayReportModal] = useState(false)

  const { data: CreatorQuery } = useQuery('CreatorQuery', () =>
    getCreator(creatorId)
  )

  const urlCover = CreatorQuery
    ? CreatorQuery.creator.coverImageUrl
    : backgroundGradient.backgroundGradient2

  return (
    <Layout
      cois="0.2222"
      publicKey="0x834fas75fsha87hf38kuk4758"
      profileImageUrl="https://f8n-ipfs-production.imgix.net/Qme6A7qARnvZsn5RNSuJS8MyZjzzev4afcr6JVJxjciUvB/nft.png"
      name="Roger"
      padding="20px"
      marginTop="0"
    >
      <Creator
        creatorQuery={CreatorQuery ? CreatorQuery.creator : ''}
        linkTwitter={linkShareTwitter()}
        setDisplayReportModal={setDisplayReportModal}
        type="account"
      />
    </Layout>
  )
}

export default AccountPage
