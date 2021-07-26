import React, { useState } from 'react'
import { useQuery } from 'react-query'
import Layout from '../../components/Layout'
import Account from '../../components/Creator'
import {
  getOneFolloweeByIdWithAllHisFollowers,
  getOneFollowerByIdWithAllHisFollowees
} from '../../services/follow'
import Spinner from '../../components/Spinner'

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

    const { data: followeeItem, isLoading: isLoadingFollowees, error } = useQuery('followeeQuery', () => getOneFolloweeByIdWithAllHisFollowers(1))

    const { data: followersItem, isLoading: isLoadingFollowers, error: errorFollowers } = useQuery('followersQuery', () => getOneFollowerByIdWithAllHisFollowees(1))


  return (
    <Layout
      padding="0"
      marginTop="0"
      height
      backgroundImage={
        'https://image.mux.com/OqOt4fV1UKU02PntGC022luD9O7J01JZ701etlf022JIhd6A/thumbnail.jpg'
      }
    >
    { isLoadingFollowers ?
      <Spinner height="50vh"/>
      :
      <Account
        isMyAccount={false}
  
        followers={followeeItem.followers.length}
        following={followersItem.followees.length}

        address={address}
        linkTwitter={linkShareTwitter()}
        setDisplayReportModal={setDisplayReportModal}
      />

    }
    </Layout>
  )
}

export default AccountPage
