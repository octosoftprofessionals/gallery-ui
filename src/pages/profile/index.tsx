import React, { useState } from 'react'
import { navigate } from 'gatsby'
import { useQuery } from 'react-query'
import { AccountComponent } from '../../components/AccountComponent'
import { getUser } from '../../services/users'
import { useMetamaskAccount } from '../../hooks/useAccountStore'
import NotFound from '../404'

const ProfilePage = () => {
  const address = useMetamaskAccount()
  const { data: userAccount, isLoading } = useQuery('userQuery', () =>
    getUser({ public_address: address })
  )

  if (!address) {
    navigate('/')
    return null
  }
  return <AccountComponent isLoading={isLoading} userAccount={userAccount} />
}

export default ProfilePage
