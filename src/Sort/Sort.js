import React, { useContext, useState } from 'react';
import { Context } from '../AppProvider';
import { Container, Box, BtnsContainer, DownIcon, AllIcon, DoneIcon, ExIcon } from './SortStyles';

function Sort() {

    const ctx = useContext(Context);

    const handleShowDone = () => {
        const filtered = ctx.notes.filter((note) => note.done === true)
        ctx.setFiltered(filtered)
    }

    const showAll = () => {
        ctx.setFiltered(ctx.notes);
    }

    const handleNotDone = () => {
        const filtered = ctx.notes.filter((note) => note.done === false);
        ctx.setFiltered(filtered);
    }

    const [showButtons, setShowButtons] = useState(false);
    const handleShowButtons = () => setShowButtons(!showButtons);

    return (
        <Container>
            <DownIcon onClick={handleShowButtons} />
            {showButtons ? (
                <Box showButtons={showButtons}>
                    <BtnsContainer>
                        <button onClick={showAll} ><AllIcon /> Wszystkie</button>
                        <button onClick={handleShowDone} ><DoneIcon />Zrobione</button>
                        <button onClick={handleNotDone}><ExIcon /> Do zrobienia</button>
                    </BtnsContainer>
                </Box>
            ) : null

            }
        </Container>
    );
}

export default Sort;
