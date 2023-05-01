import { Container } from "./styles";
import { Header } from "../../Components/Header";
import { Link } from "react-router-dom";
import { FiArrowLeft } from 'react-icons/fi';
import { Input } from "../../Components/Input";
import { Textarea } from "../../Components/Textarea";
import { NoteItem } from "../../Components/NoteItem";
import { Button } from "../../Components/Button";

export function CreateMovie() {

    return (
        <Container>
          <Header/>
          <main>
            <div className="Header">
          <Link to="/"><FiArrowLeft/>Voltar</Link>
          <h1>Novo filme</h1>
            </div>

          <div className="input">
            <Input
             type="text"
             placeholder="Titulo"
            />
            <Input
             type="number"
             placeholder="Sua nota (de 0 a 5)"
            />
          </div>
          <Textarea placeholder="Observações"/>
          <div className="Container">
            <h2>Marcadores</h2>
            <div className="Marcadores">
            <NoteItem value="react"/>
            <NoteItem isNew placeholder="Novo filme"/>
            </div>
          </div>         

          <div className="Button">
            <button className="First" >Excluir filme</button>
            <Button title="Salvar alterações"/>
          </div>
          
          </main>
        </Container>
    )
}
