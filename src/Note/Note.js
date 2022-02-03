import { NoteContainer, NoteFooter, DeleteIcon, DoneIcon } from './NoteStyles'
import { useContext } from 'react';
import { Context } from '../AppProvider';

const Note = ({ text, date, handleDeleteNote, color, id, done }) => {



    const ctx = useContext(Context);

    const handleDone = (id) => {
        ctx.setNotes(ctx.notes.map((note) => {
            if (note.id === id) {
                return {
                    ...note,
                    done: !done,
                }
            } else {
                return note
            }
        }))
    }

    return (
        <NoteContainer color={color}>
            <p> {text} </p>
            <NoteFooter>
                <small> {date} </small>
                <DeleteIcon
                    onClick={() => handleDeleteNote(id)}
                />
                <DoneIcon $done={done} onClick={() => handleDone(id)} />
            </NoteFooter>
        </NoteContainer>
    );
};

export default Note;