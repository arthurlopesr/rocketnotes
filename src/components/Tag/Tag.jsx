import { Container } from './stlyes'

export function Tag({ title, ...props }) {
    return (
        <Container {...props}>
            {title}
        </Container>
    )
}