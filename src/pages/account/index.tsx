import React, { useState } from 'react'
import { useQuery } from 'react-query'
import Layout from '../../components/Layout'
import Account from '../../components/Creator'

import Spinner from '../../components/Spinner'

import useQueryParams from '../../hooks/useQueryParams'
import { getUser } from '../../services/users'

const linkShareTwitter = () => {
  const SITE_URL = typeof window !== 'undefined' ? window.location.href : ''
  const searchParams = new URLSearchParams()
  searchParams.set('url', SITE_URL)
  searchParams.set('text', 'Art is lit! Check this out!')
  return `https://twitter.com/share?${searchParams.toString()}`
}

const AccountPage = () => {
  const { address } = useQueryParams()
  const [displayReportModal, setDisplayReportModal] = useState(false)
  const { data: userAccount, isLoading } = useQuery('userQuery', () =>
    getUser({ public_address: address })
  )

  return (
    <Layout
      padding="0"
      marginTop="0"
      height
      backgroundImage={
        isLoading
          ? 'https://f8n-production.imgix.net/creators/profile/y26ylgt72-rari-jpg-at7pyj.jpg'
          : userAccount.coverImgUrl
      }
    >
      {isLoading ? (
        <Spinner height="50vh" />
      ) : (
        <Account
          isMyAccount={true}
          user={userAccount}
          setDisplayReportModal={setDisplayReportModal}
        />
      )}
    </Layout>
  )
}

export default AccountPage
