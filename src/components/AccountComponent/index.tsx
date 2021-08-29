import React, { useState } from 'react'
import Layout from '../Layout'
import Account from '../Creator'
import Spinner from '../Spinner'

const linkShareTwitter = () => {
  const SITE_URL = typeof window !== 'undefined' ? window.location.href : ''
  const searchParams = new URLSearchParams()
  searchParams.set('url', SITE_URL)
  searchParams.set('text', 'Art is lit! Check this out!')
  return `https://twitter.com/share?${searchParams.toString()}`
}

export const AccountComponent = ({ isLoading, userAccount }) => {
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
          linkTwitter={linkShareTwitter()}
        />
      )}
    </Layout>
  )
}

export default AccountComponent
