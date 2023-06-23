import { Container } from './styles'

export function ButtonText({ title, isActive = false, ...props }) {
    return (
        <Container
            type='button'
            isActive={isActive}
            {...props}
        >

            {title}
        </Container>
    );
}