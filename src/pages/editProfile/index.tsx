import React from 'react'
import { useQuery } from 'react-query'
import Layout from '../../components/Layout'
import EditForm from '../../components/EditForm'
import { getUser } from '../../services/users'
import { useMetamaskAccount } from '../../hooks/useAccountStore'
import NotFound from '../404'

const editProfile = () => {
  const address = useMetamaskAccount()
  const { data: userAccount, isLoading } = useQuery('userQuery', () =>
    getUser({ public_address: address })
  )

  if (!address) {
    return <NotFound />
  }

  return (
    <Layout>
      {userAccount ? <EditForm userAccount={userAccount} /> : null}
    </Layout>
  )
}

export default editProfile
