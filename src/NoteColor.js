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

            <Color onClick={() => ctx.setColor("green")} style={{ backgroundColor: "green" }} />
            <Color onClick={() => ctx.setColor("gold")} style={{ backgroundColor: "gold" }} />
            <Color onClick={() => ctx.setColor("orange")} style={{ backgroundColor: "orange" }} />
            <Color onClick={() => ctx.setColor("yellow")} style={{ backgroundColor: "yellow" }} />

        </Container>
    )
}

export default NoteColor
