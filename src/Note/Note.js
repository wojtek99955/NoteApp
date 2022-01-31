import { NoteContainer, NoteFooter, DeleteIcon } from './NoteStyles'

const Note = ({ id, text, date, handleDeleteNote, color }) => {

    return (
        <NoteContainer color={color}>
            <p> {text} </p>
            <NoteFooter>
                <small> {date} </small>
                <DeleteIcon
                    onClick={() => handleDeleteNote(id)}
                />
            </NoteFooter>
        </NoteContainer>
    );
};

export default Note;
