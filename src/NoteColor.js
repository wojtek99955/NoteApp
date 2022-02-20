import React, { useContext } from 'react'
import styled from 'styled-components';
import { Context } from './AppProvider';

const Container = styled.div`
display: flex;
gap:0.5rem;
`

const Color = styled.div`
width:20px;
height:20px;
border-radius: 50%;
cursor: pointer;
`

function NoteColor() {

    const ctx = useContext(Context);


    return (
        <Container>

            <Color onClick={() => ctx.setColor("#BAFFB4")} style={{ backgroundColor: "#BAFFB4" }} />
            <Color onClick={() => ctx.setColor("#FFFDA2")} style={{ backgroundColor: "#FFFDA2" }} />
            <Color onClick={() => ctx.setColor("#FFAB76")} style={{ backgroundColor: "#FFAB76" }} />
            <Color onClick={() => ctx.setColor("#FF6363")} style={{ backgroundColor: "#FF6363" }} />

        </Container>
    )
}

export default NoteColor
