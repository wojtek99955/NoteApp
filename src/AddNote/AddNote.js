import React, { useState, useEffect, useRef, useContext } from "react";
import { NewNote, NewNoteFooter, Container } from './AddNoteStyles';
import { Context } from '../AppProvider';
import { nanoid } from "nanoid";
import NoteColor from '../NoteColor';
import AddError from '../Notifications/AddError';
import AddNotification from '../Notifications/AddNotification';
import CharactersError from '../Notifications/CharactersError';

const AddNote = () => {

    const ctx = useContext(Context);
    const [addError, setAddError] = useState(null);
    const [addNotification, setAddNotification] = useState(null);
    const [charactersError, setCharactersError] = useState(null);

    const addNote = (text) => {
        const date = new Date();
        const newNote = {
            id: nanoid(),
            text: text,
            date: date.toLocaleDateString(),
            color: ctx.color,
            done: false,
        };
        const newNotes = [...ctx.notes, newNote];
        ctx.setNotes(newNotes);
    };

    const [noteText, setNoteText] = useState([]);
    const characterMax = 200;

    const handleOnChange = (e) => {
        if (characterMax - e.target.value.length >= 0) {
            setNoteText(e.target.value);
            setAddNotification(false);
            setCharactersError(false);
        } else {
            setCharactersError(true);
        }
    };

    const handleSave = () => {
        if (noteText.length > 0) {
            addNote(noteText);
            setNoteText("");
            ctx.setColor("rgb(233,233,233)");
            setAddError(false);
            setAddNotification(true);
        } else if (noteText.length === 0) {
            setAddError(true);
            setAddNotification(false);
        }
    };

    const textareaRef = useRef();

    useEffect(() => {
        if (ctx.showTextarea) {
            textareaRef.current.focus();
        }
    }, [ctx.showTextarea]);


    return (
        <Container>
            <NewNote color={ctx.color}>
                <textarea
                    onChange={handleOnChange}
                    value={noteText}
                    className="text"
                    rows="8"
                    cols="10"
                    placeholder="Napisz swoją notatkę"
                    ref={textareaRef}
                ></textarea>
                <NewNoteFooter>
                    <small>
                        Pozostało {characterMax - noteText.length} znaków
                    </small>
                    <button onClick={handleSave} onMouseUp={() => setAddError(false)}>
                        zapisz
                    </button>
                </NewNoteFooter>
            </NewNote>
            <NoteColor />
            {addError ?
                <AddError
                    addError={addError}
                    setAddError={setAddError}
                />
                : null
            }
            {addNotification ?
                <AddNotification
                    addNotification={addNotification}
                    setAddNotification={setAddNotification}
                />
                : null
            }
            {charactersError ?
                <CharactersError
                    charactersError={charactersError}
                    setCharactersError={setCharactersError}
                />
                : null
            }
        </Container>
    );
};

export default AddNote;
