import { Container, Profile } from "./styles"
import { Input } from "../Input"

export function Header(){

    return (
        <Container>
           <h1>RocketMovies</h1>
           <Input placeholder="Pesquisar pelo título"
            type="text"/>          
           <Profile to="Profile">
               <div>
                   <strong>Gabriel Lingnau</strong>
                   <span>Sair</span>
               </div>
            <img src="https://github.com/Gabrielingnau.png" 
            alt="imagem de Gabriel Lingnau" />
          </Profile>
        </Container>
    )
}