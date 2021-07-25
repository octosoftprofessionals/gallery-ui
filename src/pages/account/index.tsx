import React, { useState } from 'react'
import { useQuery } from 'react-query'
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

const AccountPage = () => {
  const [displayReportModal, setDisplayReportModal] = useState(false)
  const { address } = useQueryParams()

  return (
    <Layout
      padding="0"
      marginTop="0"
      height
      backgroundImage={
        'https://image.mux.com/OqOt4fV1UKU02PntGC022luD9O7J01JZ701etlf022JIhd6A/thumbnail.jpg'
      }
    >
      <Creator
        isMyAccount={false}
        address={address}
        linkTwitter={linkShareTwitter()}
        setDisplayReportModal={setDisplayReportModal}
      />
    </Layout>
  )
}

export default AccountPage
