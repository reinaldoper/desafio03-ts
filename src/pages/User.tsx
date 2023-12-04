import React, { useContext } from 'react'
import UserDatails from '../components/UserDatails'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../components/AppContext'
import { getRemoteStorage } from '../services/storage'
import { Box, Center } from '@chakra-ui/react'

const User = () => {

  const navigate = useNavigate()

  const { isLoggedIn } = useContext(AppContext)
  const email = getRemoteStorage('email')
  const balance = getRemoteStorage('balance')
  const name = getRemoteStorage('name')

  !isLoggedIn && navigate('/')
  return (
    <>
      <UserDatails>
        <Center>
          <Box>
            <strong>Email: </strong>{email}
          </Box>
        </Center>
        <Center>
          <Box>
            <strong>Balance: </strong>{balance}
          </Box>
        </Center>
        <Center>
          <Box>
            <strong>Name: </strong>{name}
          </Box>
        </Center>
      </UserDatails>
    </>
  )
}

export default User
