import { NoteContainer, NoteFooter, DeleteIcon } from './NoteStyles'

const Note = ({ id, text, date, handleDeleteNote }) => {

    return (
        <NoteContainer>
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
