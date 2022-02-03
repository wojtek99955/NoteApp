import Note from "../Note/Note";
import React, { useState, useContext } from "react";
import { Wrapper, ViewWrapper, NoteListWrapper, StyledGridIcon, StyledRowsIcon, SortContainer } from './NoteListStyles';
import { Context } from '../AppProvider';
import Sort from '../Sort/Sort';


const NoteList = () => {

    const ctx = useContext(Context);

    const notes = ctx.filtered.filter((note) => {
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
            <SortContainer>
                <Sort />
                {
                    notes.length > 1 && (
                        <ViewWrapper onClick={handleView}>
                            {view ? <StyledGridIcon darkMode={ctx.darkMode} /> : <StyledRowsIcon darkMode={ctx.darkMode} />}
                        </ViewWrapper>
                    )
                }
            </SortContainer>
            <NoteListWrapper view={view}>
                {notes.map((note) => (
                    <Note
                        id={note.id}
                        text={note.text}
                        date={note.date}
                        handleDeleteNote={deleteNote}
                        key={note.id}
                        color={note.color}
                        done={note.done}
                    />
                ))}
            </NoteListWrapper>
        </Wrapper>
    );
};

export default NoteList;
