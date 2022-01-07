import React, { useState } from 'react'
import Layout from '../Layout'
import Account from '../Creator'
import Spinner from '../Spinner'
import { profilePathFromAddress } from '../../config/routes'

export const AccountComponent = ({ isLoading, userAccount }) => {
  const [displayReportModal, setDisplayReportModal] = useState(false)
  const [coverProfileImgUrl, setCoverProfileImgUrl] = useState('')

const sessionUser = localStorage.getItem('user')
const parseSessionUser = JSON.parse(sessionUser)

  const linkShareTwitter = () => {
    const path = profilePathFromAddress(userAccount.publicAddress)
    const BASE_URL = typeof window !== 'undefined' ? window.location.origin : ''
    const searchParams = new URLSearchParams()
    searchParams.set('url', `${BASE_URL}${path}`)
    searchParams.set('text', 'Art is lit! Check this out!')
    return `https://twitter.com/share?${searchParams.toString()}`
  }

  return (
    <Layout
      padding="0"
      marginTop="0"
      height
      backgroundImage={coverProfileImgUrl}
    >
      {!parseSessionUser ? (
        <Spinner height="50vh" />
      ) : (
        <Account
          isMyAccount={true}
          user={parseSessionUser[0]}
          setDisplayReportModal={setDisplayReportModal}
          setCoverImgUrl={setCoverProfileImgUrl}
          linkTwitter={linkShareTwitter()}
        />
      )}
    </Layout>
  )
}

export default AccountComponent
