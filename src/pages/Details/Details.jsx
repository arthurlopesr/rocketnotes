import { Container } from "./styles"
import { Header } from "../../components/Header/Header"
import { Button } from "../../components/Button/Button"

export function Details() {
  // posso usar fragments tbm <> </> para subsituir a div

  return (
    <Container>
      <Header />
      <Button title="Voltar" />

    </Container>
  )
}