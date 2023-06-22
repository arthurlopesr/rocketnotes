import { Container, Links } from "./styles"
import { Header } from "../../components/Header/Header"
import { Button } from "../../components/Button/Button"
import { Section } from "../../components/Section/Section"
import { Tag } from "../../components/Tag/Tag"


export function Details() {
  // posso usar fragments tbm <> </> para subsituir a div

  return (
    <Container>

      <Header />

      <Section title={"Links úteis"}>
        <Links>
          <li>
            <a href="#">https://www.rocketseat.com.br/</a>
            <a href="#">https://www.rocketseat.com.br/</a>
          </li>
        </Links>
      </Section>

      <Section title={"Marcadores"}>
        <Tag title={"express"} />
        <Tag title={"nodejs"} />
      </Section>

      <Button title="Voltar" />

    </Container>
  )
}