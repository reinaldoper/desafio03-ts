import { Box, Button, Center, Flex, Spacer, Text } from '@chakra-ui/react'
import { useContext } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { changeLocalStorage } from '../services/storage'
import { AppContext } from './AppContext'
import { logar } from "../services/userStorage";


export const Header  = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AppContext)
  const navigate = useNavigate()
  const local = useLocation();

  const logout = () => {
    changeLocalStorage({ login: false})
    setIsLoggedIn(false)
    navigate('/')
  }

  const details = () => {
    navigate('/details')
  }
  
  const contaUser = async () => {
    await logar() && navigate(`/conta/${await logar()}`)
  }

  return(
    <Flex backgroundColor='orange' padding='5px'>
      <Box>
        <Center>
          <Text fontSize='3xl'>Dio Bank</Text>
        </Center>
      </Box>
      {
        isLoggedIn && (
          <>
            <Spacer />
            <Button
              onClick={() => logout()}
            >
              Sair
            </Button>
          </>
        )
      }
      {
        (isLoggedIn && local.pathname !== '/details') ? (
          <>
            <Spacer />
            <Button
              onClick={() => details()}
            >
              Details
            </Button>
          </>
        ): null
      }
      {
        (isLoggedIn && local.pathname !== '/conta/1') ? (
          <>
            <Spacer />
            <Button
              onClick={() => contaUser()}
            >
              Account
            </Button>
          </>
        ): null
      }
    </Flex>
    
  )
}
