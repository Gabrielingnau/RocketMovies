import { Container } from "./styles";

export function TagMarrom({title, ...rest}) {

    return (
    <Container {...rest}>
       {title}
    </Container>
    )
}