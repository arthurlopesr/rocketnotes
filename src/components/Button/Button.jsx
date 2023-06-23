import { Container } from "./styles";

export function Button({ title, loading = false, ...props }) {

    return (
        <Container
            type="button"
            disabled={loading}
            {...props}
        >
            {loading ? 'Carregando...' : title}
        </Container>
    )
}