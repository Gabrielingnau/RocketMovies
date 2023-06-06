import { Background, Container, Form, Div } from "./styles";
import { useState } from "react";
import { Input } from "../../Components/Input";
import { Button } from "../../Components/Button";
import { FiMail, FiLock, FiUser, FiArrowLeft } from 'react-icons/fi';
import { Link, useNavigate  } from "react-router-dom";
import { api } from "../../services/api";

export function SignUp(){

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navegate = useNavigate()

  function handleSignUp() {
    if(!email || !password || !name){
      return alert("Preencha todos os campos!")
    }

    api.post("/users", { name, email, password }).then(() => {
      alert("Usuario cadastrado com sucesso")
      navegate("/")
    }).catch(error => {
      if (error.reponse) {
        alert(error.response.date.message)
      }else {
        alert("Não foi possivel cadastrar")
      }
    })
  }

    return (
        <Container>
            <Form>
                <Div>
                <h1>RocketMovie</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>
                <h2>Crie sua conta</h2>
                </Div>
                
            <Input 
            placeholder="Nome" 
            type="text" 
            icon={FiUser} 
            onChange={e => setName(e.target.value)}
            />
            <Input 
            placeholder="E-mail" 
            type="text" 
            icon={FiMail} 
            onChange={e => setEmail(e.target.value)}
            />
            <Input 
            placeholder="Senha" 
            type="password" 
            icon={FiLock} 
            onChange={e => setPassword(e.target.value)}
            />

           <Button 
           title="Entrar"
           onClick={handleSignUp}
           />

           <Link 
           to="/" > <FiArrowLeft/> Voltar para o login
           </Link>

            </Form>

           <Background />

        </Container>
    )
}