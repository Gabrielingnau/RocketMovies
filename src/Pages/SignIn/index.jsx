import { Background, Container, Form, Div } from "./styles"
import { Input } from "../../Components/Input"
import { Button } from "../../Components/Button"
import { FiMail, FiLock } from 'react-icons/fi'
import { Link } from "react-router-dom";

export function SignIn(){

    return (
        <Container>
            <Form>
                <Div>
                <h1>RocketMovie</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>
                <h2>Faça seu login</h2>
                </Div>
                
            <Input placeholder="E-mail" type="text" icon={FiMail} />
            <Input placeholder="Senha" type="password" icon={FiLock} />
           <Button title="Entrar"/>
           <Link to="Register">Criar conta</Link>
            </Form>
           <Background />
        </Container>
    )
}