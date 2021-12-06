import React from 'react'
import { useQuery } from 'react-query'
import Layout from '../../components/Layout'
import EditForm from '../../components/EditForm'
import { getUser } from '../../services/users'
import { useAccountStore } from '../../hooks/useAccountStore'
import NotFound from '../404'

const editProfile = () => {
  const {account} = useAccountStore()
  const address = account?.toLowerCase()
  
  const { data: userAccount, isLoading } = useQuery('userQuery', () =>
  getUser({ public_address: address })
  )


  if (!address) {
    return <NotFound />
  }

  return (
    <Layout>
      {isLoading ? null : <EditForm userAccount={userAccount} />}
    </Layout>
  )
}

export default editProfile
