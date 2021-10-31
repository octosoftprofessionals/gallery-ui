import React, { useState } from 'react'
import { navigate } from 'gatsby'
import { useQuery } from 'react-query'
import { AccountComponent } from '../../components/AccountComponent'
import NotFound from '../../components/404'
import { getUser } from '../../services/users'
import { useMetamaskAccount } from '../../hooks/useAccountStore'

const ProfilePage = () => {
  const address = useMetamaskAccount()
  const { data: userAccount, isLoading } = useQuery('userQuery', () =>
    getUser({ public_address: address })
  )

  if (!address) {
    return <NotFound />
  }
  return <AccountComponent isLoading={isLoading} userAccount={userAccount} />
}

export default ProfilePage
