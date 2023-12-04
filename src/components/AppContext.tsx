import { createContext, useEffect, useState } from "react"
import { getAllLocalStorage } from "../services/storage"

interface IAppContext {
    user: string,
    isLoggedIn: boolean,
    setIsLoggedIn: (isLoggedIn: boolean) => void
    email: string,
    password: string,
    setEmail: (email: string) => void
    setPassword: (password: string) => void
}
  
export const AppContext = createContext({} as IAppContext)
  
export const AppContextProvider = ({ children }: any) => {
    const [ isLoggedIn, setIsLoggedIn ] = useState<boolean>(false)
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const storage = getAllLocalStorage()

    useEffect(() => {
      if(storage){
        const { login } = JSON.parse(storage)
        setIsLoggedIn(login)
      }
    }, [storage])

    const user = 'nathally'
  
    return (
      <AppContext.Provider value={{ user, isLoggedIn, setIsLoggedIn, email, password, setEmail, setPassword }}>
        { children }
      </AppContext.Provider>
    )
}
