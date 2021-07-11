import React, { useState, useEffect } from 'react'
import { useQuery } from 'react-query'
import Layout from '../../components/Layout'
import Creator from '../../components/Creator'
import { getAccount } from '../../services/autionsService'
import { backgroundGradient } from '../../components/Styles/Colors'
import useQueryParams from '../../hooks/useQueryParams'

const linkShareTwitter = () => {
  const SITE_URL = typeof window !== 'undefined' ? window.location.href : ''
  const searchParams = new URLSearchParams()
  searchParams.set('url', SITE_URL)
  searchParams.set('text', 'Art is lit! Check this out!')
  return `https://twitter.com/share?${searchParams.toString()}`
}

const AccountPage = () => {
  const [metamaskAccount, setMetamaskAccount] = useState(null)
  const [displayReportModal, setDisplayReportModal] = useState(false)

  const handleConnection = async () => {
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' })
    setMetamaskAccount(accounts[0])
  }

  handleConnection()

  const { data: AccountQuery } = useQuery('AccountQuery', () =>
    getAccount(metamaskAccount)
  )

  const urlCover = AccountQuery
    ? AccountQuery.account.collection.banner_image_url
    : backgroundGradient.backgroundGradient2

  return (
    <Layout
      cois="0.2222"
      publicKey={metamaskAccount}
      profileImageUrl={
        AccountQuery
          ? AccountQuery.account.image_url
          : 'https://image.mux.com/OqOt4fV1UKU02PntGC022luD9O7J01JZ701etlf022JIhd6A/thumbnail.jpg'
      }
      name={AccountQuery ? AccountQuery.account.name : 'Peter Parker'}
      padding="20px"
      marginTop="0"
      height
      backgroundImage={urlCover}
    >
      <Creator
        accountQuery={AccountQuery ? AccountQuery.account : ''}
        linkTwitter={linkShareTwitter()}
        setDisplayReportModal={setDisplayReportModal}
        type="account"
      />
    </Layout>
  )
}

export default AccountPage
