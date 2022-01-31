import Note from "../Note/Note";
import React, { useState, useContext } from "react";
import { Wrapper, ViewWrapper, NoteListWrapper, StyledGridIcon, StyledRowsIcon } from './NoteListStyles';
import { Context } from '../AppProvider';


const NoteList = () => {

    const ctx = useContext(Context);

    const notes = ctx.notes.filter((note) => {
        return (
            note.text.toLowerCase().includes(ctx.searchText));
    });


    const [view, setView] = useState(false);
    const handleView = () => {
        setView(!view);
    };

    const deleteNote = (id) => {
        const newNotes = ctx.notes.filter((note) => note.id !== id);
        ctx.setNotes(newNotes);
    };

    return (
        <Wrapper>
            {
                notes.length > 1 && (
                    <ViewWrapper onClick={handleView}>
                        {view ? <StyledGridIcon darkMode={ctx.darkMode} /> : <StyledRowsIcon darkMode={ctx.darkMode} />}
                    </ViewWrapper>
                )
            }
            <NoteListWrapper view={view}>
                {notes.map((note) => (
                    <Note
                        id={note.id}
                        text={note.text}
                        date={note.date}
                        handleDeleteNote={deleteNote}
                        key={note.id}

                    />
                ))}
            </NoteListWrapper>
        </Wrapper>
    );
};

export default NoteList;
