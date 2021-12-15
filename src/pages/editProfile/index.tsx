import React from 'react'
import { useQuery } from 'react-query'
import Layout from '../../components/Layout'
import EditForm from '../../components/EditForm'
import { getUser } from '../../services/users'
import { useAccountStore } from '../../hooks/useAccountStore'
import Spinner from '../../components/Spinner'
import NotFound from '../404'

const editProfile = () => {
  const { account } = useAccountStore()
  const address = account?.toLowerCase()

  const { data: userAccount, isLoading } = useQuery('userQuery', () =>
    getUser({ public_address: address })
  )

  const logedAccount = typeof window !== 'undefined' ? sessionStorage.getItem('account') : null
  const sessionCheck = typeof window !== 'undefined' ? sessionStorage.getItem('user') : null

  if (userAccount && Boolean(logedAccount)) {
    sessionStorage.setItem('user', JSON.stringify([userAccount]))
  }

  const sessionAccount = JSON.parse(sessionCheck)

  if (Boolean(logedAccount)) {
    return (
      <Layout>
        {isLoading ? (
          <Spinner height="50vh" />
        ) : (
          <EditForm userAccount={sessionAccount} />
        )}
      </Layout>
    )
  } else {
    return <NotFound />
  }
}

export default editProfile
