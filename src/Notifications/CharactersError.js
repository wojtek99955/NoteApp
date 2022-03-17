import { Container, CloseIcon } from './NotificationStyles';

function CharactersError({ charactersError, setCharactersError }) {

    const handleCloseError = () => {
        setCharactersError(false);
    }

    return (
        <Container charactersError={charactersError} color="219,53,69,0.8">
            <p>Twoja notatka ma za dużo znaków!</p>
            <CloseIcon onClick={handleCloseError} />
        </Container>
    )
}

export default CharactersError