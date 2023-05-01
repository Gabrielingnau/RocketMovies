import { Container } from "./styles"
import { Button } from "../../Components/Button"
import { FiPlus, FiStar } from 'react-icons/fi'
import { Header } from "../../Components/Header"
import { Tag } from "../../Components/Tag";
import { AiFillStar } from 'react-icons/ai' 
import { Link } from "react-router-dom";
 

export function Home(){

    return (
        <Container>
          <Header/>
          <div>
            <h1>Meus filmes</h1>
            <Link to="CreateMovie">
            <Button title="Adicionar filme" icon={FiPlus}/>           
            </Link>
          </div>
          <main>
            <Link to="MoviePreview">
              <h1>Interestellar</h1>
              <div className="imagem">
              <AiFillStar/>
              <AiFillStar/>
              <AiFillStar/>
              <AiFillStar/>
              <FiStar/>
              </div>
            <p> Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária 
              em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, 
              acredita que seu quarto está assombrado por um fantasma que tenta se...
            </p>
            <div className="Tag">
              <Tag title="Ficção Científica"/>
              <Tag title="Drama"/>
              <Tag title="Família"/>
            </div>
            </Link>
            <Link to="MoviePreview">
              <h1>Interestellar</h1>
              <div className="imagem">
              <AiFillStar/>
              <AiFillStar/>
              <AiFillStar/>
              <AiFillStar/>
              <FiStar/>
              </div>
            <p> Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária 
              em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, 
              acredita que seu quarto está assombrado por um fantasma que tenta se...
            </p>
            <div className="Tag">
              <Tag title="Ficção Científica"/>
              <Tag title="Drama"/>
              <Tag title="Família"/>
            </div>
            </Link>
            <Link to="MoviePreview">
              <h1>Interestellar</h1>
              <div className="imagem">
              <AiFillStar/>
              <AiFillStar/>
              <AiFillStar/>
              <AiFillStar/>
              <FiStar/>
              </div>
            <p> Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária 
              em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, 
              acredita que seu quarto está assombrado por um fantasma que tenta se...
            </p>
            <div className="Tag">
              <Tag title="Ficção Científica"/>
              <Tag title="Drama"/>
              <Tag title="Família"/>
            </div>
            </Link>
            <Link to="MoviePreview">
              <h1>Interestellar</h1>
              <div className="imagem">
              <AiFillStar/>
              <AiFillStar/>
              <AiFillStar/>
              <AiFillStar/>
              <FiStar/>
              </div>
            <p> Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária 
              em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, 
              acredita que seu quarto está assombrado por um fantasma que tenta se...
            </p>
            <div className="Tag">
              <Tag title="Ficção Científica"/>
              <Tag title="Drama"/>
              <Tag title="Família"/>
            </div>
            </Link>
          </main>
        </Container>
    )
}