import { Container, Form, Avatar } from './styles'
import { FiArrowLeft, FiLock, FiUser, FiMail, FiCamera } from 'react-icons/fi'
import { Input } from '../../components/Input/Input'
import { Button } from '../../components/Button/Button'


export function Profile() {
    return (
        <Container>
            <header>
                <a href="/">
                    <FiArrowLeft />
                </a>
            </header>

            <Form>
                <Avatar>
                    <img
                        src="https://github.com/arthurlopesr.png"
                        alt="Fotodo usuário"
                    />

                    <label htmlFor="avatar">
                        <FiCamera />
                        <input
                            id='avatar'
                            type='file'
                        />
                    </label>
                </Avatar>
                <Input
                    placeholder="Nome"
                    type={"text"}
                    icon={FiUser}
                />

                <Input
                    placeholder="E-mail"
                    type={"email"}
                    icon={FiMail}
                />

                <Input
                    placeholder="Senha Atual"
                    type={"password"}
                    icon={FiLock}
                />

                <Input
                    placeholder="Nova Senha"
                    type={"password"}
                    icon={FiLock}
                />

                <Button title={"Salvar"} />

            </Form>

        </Container>
    )
}