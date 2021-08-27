import React, { useState } from 'react'
import { useQuery } from 'react-query'
import AccountPage from '../account'
import { getUser } from '../../services/users'
import { useMetamaskAccount } from '../../hooks/useAccountStore'

const ProfilePage = () => {
  const address = useMetamaskAccount()
  const { data: userAccount, isLoading } = useQuery('userQuery', () =>
    getUser({ public_address: address })
  )

  return <AccountPage isLoading={isLoading} userAccount={userAccount} />
}

export default ProfilePage
