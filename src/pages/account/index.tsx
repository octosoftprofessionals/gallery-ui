import React, { useState } from 'react'
import Layout from '../../components/Layout'
import Account from '../../components/Creator'
import Spinner from '../../components/Spinner'

const linkShareTwitter = () => {
  const SITE_URL = typeof window !== 'undefined' ? window.location.href : ''
  const searchParams = new URLSearchParams()
  searchParams.set('url', SITE_URL)
  searchParams.set('text', 'Art is lit! Check this out!')
  return `https://twitter.com/share?${searchParams.toString()}`
}

const AccountPage = ({ isLoading, userAccount }) => {
  const [displayReportModal, setDisplayReportModal] = useState(false)
  const [coverProfileImgUrl, setCoverProfileImgUrl] = useState('')

  return (
    <Layout
      padding="0"
      marginTop="0"
      height
      backgroundImage={coverProfileImgUrl}
    >
      {isLoading ? (
        <Spinner height="50vh" />
      ) : (
        <Account
          isMyAccount={true}
          user={userAccount}
          setDisplayReportModal={setDisplayReportModal}
          setCoverImgUrl={setCoverProfileImgUrl}
        />
      )}
    </Layout>
  )
}

export default AccountPage
