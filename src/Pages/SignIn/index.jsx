import { Background, Container, Form, Div } from "./styles"
import { useState } from "react"
import { Input } from "../../Components/Input"
import { Button } from "../../Components/Button"
import { FiMail, FiLock } from 'react-icons/fi'
import { Link } from "react-router-dom";

export function SignIn(){

    const [name, setName] = useState()
    const [email, setEmail] = useState()

    function handleSignIn() {
      console.log(name, email)
    }

    return (
        <Container>
            <Form>
                <Div>
                <h1>RocketMovie</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>
                <h2>Faça seu login</h2>
                </Div>
                
            <Input 
            placeholder="E-mail"
             type="text"
             icon={FiMail}
             onChange={e => setName(e.target.value)}
               />
            <Input
             placeholder="Senha" 
             type="password" 
             icon={FiLock}
             onChange={e => setEmail(e.target.value)}
              />

           <Button
            title="Entrar"
            onClick={handleSignIn}
            />
           <Link 
           to="Register">Criar conta
           </Link>

            </Form>

           <Background />

        </Container>
    )
}