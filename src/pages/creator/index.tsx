import React, { useState } from 'react'
import { useQuery } from 'react-query'

import Layout from '../../components/Layout'
import Creator from '../../components/Creator'

import { galleryItemQuery } from '../../services/gallery'

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
  const contractAddress = '0x495f947276749ce646f68ac8c248420045cb7b5e'
  const tokenId =
    '109357140932249174184232105731133177415490681567806678064024980607176452079646'
  const { data: creatorItem, isLoading } = useQuery(
    'creatorQuery',
    () => galleryItemQuery(contractAddress, tokenId),
    {
      refetchOnWindowFocus: false,
    }
  )

  return (
    <Layout
      padding="0"
      marginTop="0"
      height
      backgroundImage={isLoading ? null : creatorItem.creatorImageUrl}
    >
      {isLoading ? (
        <Spinner height="50vh" />
      ) : (
        <Creator
          isMyAccount={false}
          username={creatorItem.creatorUsername}
          address={address}
          profileImageUrl={creatorItem.creatorImageUrl}
          linkTwitter={linkShareTwitter()}
          setDisplayReportModal={setDisplayReportModal}
        />
      )}
    </Layout>
  )
}

export default CreatorPage
