import React, { useState } from 'react'
import { navigate } from 'gatsby'
import { useQuery } from 'react-query'
import { AccountComponent } from '../../components/AccountComponent'
import NotFound from '../../components/404'
import { getUser } from '../../services/users'
import Spinner from '../../components/Spinner'
import { useAccountStore } from '../../hooks/useAccountStore'

const ProfilePage = () => {
  const { account } = useAccountStore()
  const address = account?.toLowerCase()
  const { data: userAccount, isLoading } = useQuery('userQuery', () =>
    getUser({ public_address: address })
  )

    const logedAccount = sessionStorage.getItem('account')

  if (userAccount && logedAccount) {
    sessionStorage.setItem('user', JSON.stringify([userAccount]))
  }

  if (address) {
    return <AccountComponent isLoading={isLoading} userAccount={address} />
  } else {
    return <>{isLoading ? <Spinner height="50vh" /> : <NotFound />}</>
  }
}

export default ProfilePage
