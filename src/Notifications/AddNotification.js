import React from 'react';
import { Container, CloseIcon, showNotification } from './NotificationStyles';

function AddNotification({ addNotification, setAddNotification }) {

    const handleCloseNotification = () => setAddNotification(false);
    return (
        <Container addNotification={addNotification} color="green">
            <p>Gratulacje! Twoja notatka została dodana!</p>
            <CloseIcon onClick={handleCloseNotification} />
        </Container>
    )
}

export default AddNotification