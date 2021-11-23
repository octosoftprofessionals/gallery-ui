import React, { useState, Fragment } from 'react'
import { useQuery } from 'react-query'

import Layout from '../../components/Layout'
import Creator from '../../components/Creator'
import Spinner from '../../components/Spinner'

import NotFound from '../404'
import useQueryParams from '../../hooks/useQueryParams'
import { getUser } from '../../services/users'

const linkShareTwitter = () => {
  const SITE_URL = typeof window !== 'undefined' ? window.location.href : ''
  const searchParams = new URLSearchParams()
  searchParams.set('url', SITE_URL)
  searchParams.set('text', 'Art is lit! Check this out!')
  return `https://twitter.com/share?${searchParams.toString()}`
}

const CreatorPage = () => {
  const { address } = useQueryParams()
  const addressToLower = address ? address.toString().toLowerCase() : ''
  const [displayReportModal, setDisplayReportModal] = useState<boolean>(false)
    
    const { data: user, isLoading } = useQuery('creatorQuery', () =>
    getUser({ public_address: addressToLower })
    )
    const [coverCreatorImgUrl, setCoverCreatorImgUrl] = useState<string>('')
    
    if (user) {
      return (
        <Layout
        padding="0"
        marginTop="0"
        height
        backgroundImage={coverCreatorImgUrl}
        >
      {isLoading ? (
        <Spinner height="50vh" />
        ) : (
          <Creator
          isMyAccount={false}
          user={user}
          setDisplayReportModal={setDisplayReportModal}
          setCoverImgUrl={setCoverCreatorImgUrl}
          linkTwitter={linkShareTwitter()}
          />
          )}
    </Layout>
  )
} else {
  return (
    <Fragment
    >
      {isLoading ? (
        <Spinner height="50vh" />
        ) : (
          <NotFound />
          )}
    </Fragment>)
        }
      }
      
      
      
      export default CreatorPage
      