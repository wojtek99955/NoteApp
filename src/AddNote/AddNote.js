import React, { useState, useEffect, useRef, useContext } from "react";
import { NewNote, NewNoteFooter } from './AddNoteStyles';
import { Context } from '../AppProvider';
import { nanoid } from "nanoid";

const AddNote = () => {

    const ctx = useContext(Context);


    const addNote = (text) => {
        const date = new Date();
        const newNote = {
            id: nanoid(),
            text: text,
            date: date.toLocaleDateString(),
        };
        const newNotes = [...ctx.notes, newNote];
        ctx.setNotes(newNotes);
    };

    const [noteText, setNoteText] = useState([]);
    const characterMax = 200;

    const handleOnChange = (e) => {
        if (characterMax - e.target.value.length >= 0) {
            setNoteText(e.target.value);
        }
    };

    const handleSave = () => {
        if (noteText.trim().length > 0) {
            addNote(noteText);
            setNoteText("");
        }
    };

    const textareaRef = useRef();

    useEffect(() => {
        if (ctx.showTextarea) {
            textareaRef.current.focus();
        }
    }, [ctx.showTextarea]);

    return (
        <>
            <NewNote>
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
                    <button onClick={handleSave}>
                        zapisz
                    </button>
                </NewNoteFooter>
            </NewNote>
        </>
    );
};

export default AddNote;
