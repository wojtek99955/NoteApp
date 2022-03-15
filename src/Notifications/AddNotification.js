import React from 'react';
import { Container, CloseIcon, ThumbIcon } from './NotificationStyles';

function AddNotification({ addNotification, setAddNotification }) {

    const handleCloseNotification = () => setAddNotification(false);
    return (
        <Container addNotification={addNotification} color="40,167,70, 0.8">
            <ThumbIcon />
            <p>Gratulacje! Twoja notatka została dodana!</p>
            <CloseIcon onClick={handleCloseNotification} />
        </Container>
    )
}

export default AddNotification