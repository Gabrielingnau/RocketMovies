import { Background, Container, Form, Div } from "./styles"
import { Input } from "../../Components/Input"
import { Button } from "../../Components/Button"
import { FiMail, FiLock, FiUser, FiArrowLeft } from 'react-icons/fi'
import { Link } from "react-router-dom";

export function SignUp(){

    return (
        <Container>
            <Form>
                <Div>
                <h1>RocketMovie</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>
                <h2>Crie sua conta</h2>
                </Div>
                
            <Input placeholder="Nome" type="text" icon={FiUser} />
            <Input placeholder="E-mail" type="text" icon={FiMail} />
            <Input placeholder="Senha" type="password" icon={FiLock} />
           <Button title="Entrar"/>
           <Link to="/" > <FiArrowLeft/> Voltar para o login</Link>
            </Form>
           <Background />
        </Container>
    )
}