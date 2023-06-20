import { Container } from "./styles"
import { Button } from "../../components/Button/Button"

export function Details() {
// posso usar fragments tbm <> </> para subsituir a div

  return (
    <Container> 
      <h1>Hello Word</h1>
      <span>Arthur</span>

      <Button />
    </Container>
  )
}