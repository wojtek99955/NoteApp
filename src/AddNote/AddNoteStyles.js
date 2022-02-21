import styled from 'styled-components';

export const NewNote = styled.div`
  margin-bottom: 10px;
  background-color: ${({ color }) => color};
  padding:1rem;
  border-radius: 10px;

  textarea{
      border: none;
      resize: none;
      background-color: ${({ color }) => color};
      color: black;
      width: 100%;
      caret-color: black;
      outline: none;
      font-size: 1rem;
  }
`

export const NewNoteFooter = styled.div`
      display: flex;
      align-items: center;
      justify-content: space-between;

  small{
      color: black;
  }

  button{
      background-color: #e1e1e1;
      border: none;
      border-radius: 15px;
      padding: 5px 10px 5px 10px;
      cursor: pointer;
  }
`