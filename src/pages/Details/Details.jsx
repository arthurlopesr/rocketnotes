import { Container, Links, Content } from "./styles"
import { Header } from "../../components/Header/Header"
import { Button } from "../../components/Button/Button"
import { ButtonText } from "../../components/ButtonText/ButtonText"
import { Section } from "../../components/Section/Section"
import { Tag } from "../../components/Tag/Tag"


export function Details() {

  return (
    <Container>
      <Header />

      <main>
        <Content>
          <ButtonText title={"Excluir nota"} />

          <h1>
            Introdução ao React
          </h1>

          <p>O React é uma biblioteca JavaScript declarativa, eficiente e flexível para criar interfaces com o usuário. Ele permite compor UIs complexas a partir de pequenos e isolados códigos chamados “componentes”.</p>

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
        </Content>
      </main>


    </Container>
  )
}