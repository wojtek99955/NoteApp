import { Container, ErrorIcon, CloseIcon } from './NotificationStyles';

function AddError({ setAddError, addError }) {

    const handleCloseError = () => setAddError(false);

    return (
        <Container addError={addError} color="219,53,69,0.8">
            <ErrorIcon />
            <p>Twoja notatka musi zawierać tekst!</p>
            <CloseIcon onClick={handleCloseError} />
        </Container>
    )
}

export default AddError