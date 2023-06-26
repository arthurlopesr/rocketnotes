import { Container, Form } from './styles'
import { Header } from '../../components/Header/Header'
import { Input } from '../../components/Input/Input'
import { TextArea } from '../../components/TextArea/TextArea'
import { NoteItem } from '../../components/NoteItem/NoteItem'
import { Section } from '../../components/Section/Section'
import { Button } from '../../components/Button/Button'


export function New() {
    return (
        <Container>
            <Header />

            <main>
                <Form>
                    <header>
                        <h1>Criar Nota</h1>
                        <a href="/">voltar</a>
                    </header>

                    <Input placeholder='Titulo' />

                    <TextArea placeholder="Observações" />

                    <Section title={'Links úteis'}>
                        <NoteItem />
                        <NoteItem isNew placeholder={"Novo link"} />
                    </Section>

                    <Section title={"Marcadores"}>
                        <div className='tags'>
                            <NoteItem value={"React"} />
                            <NoteItem isNew placeholder={"Nova tag"} />
                        </div>
                    </Section>

                    <Button title={"Salvar"}/>
                </Form>
            </main>
        </Container>
    )
}
