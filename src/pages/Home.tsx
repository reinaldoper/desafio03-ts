import { Box, Center, Input } from "@chakra-ui/react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../components/AppContext";
import { Card } from "../components/Card";
import DButton from "../components/DButton";
import { login } from "../services/login";
import { changeLocalStorage } from "../services/storage";
import { detailsUser, logar } from "../services/userStorage";

const Home = () => {
    const { setIsLoggedIn, email, password, setEmail, setPassword } = useContext(AppContext)
    const navigate = useNavigate()


    const validateUser = async (email: string, password: string) => {
        const loggedIn = await login(email, password)

        if (!loggedIn) {
            return alert('Email ou senha inválido.')
        }

        setIsLoggedIn(true)
        changeLocalStorage({ login: true })
        detailsUser()
        setEmail('')
        setPassword('')
        await logar() && navigate(`/conta/${await logar()}`)
    }

    return (
        <Box padding="25px">
            <Card>
                <Center>
                    <h1>Faça o login</h1>
                </Center>
                <Input placeholder="email" value={email} onChange={(event) => setEmail(event.target.value)} />
                <Input placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <Center>
                    <DButton
                        onClick={() => validateUser(email, password)}
                    />
                </Center>
            </Card>
        </Box>
    );
}

export default Home;
